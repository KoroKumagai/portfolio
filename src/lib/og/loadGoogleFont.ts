const timeoutMs = 10_000;
const maxAttempts = 3;

type GoogleFontRequest = {
  family: string;
  weight: number;
  // 画像内で使う文字だけを渡す。Google Fonts がその文字だけのサブセットを返すため数KBに収まる
  text: string;
};

// ImageResponse（satori）は woff2 を読めないため TTF/OTF を取得する。
// UA を指定しないリクエストには Google Fonts が TTF を返す
export async function loadGoogleFont({
  family,
  weight,
  text,
}: GoogleFontRequest): Promise<ArrayBuffer> {
  const cssUrl = new URL("https://fonts.googleapis.com/css2");
  cssUrl.searchParams.set("family", `${family}:wght@${weight}`);
  cssUrl.searchParams.set("text", text);

  const css = await (await fetchWithRetry(cssUrl)).text();
  const fontUrl = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  )?.[1];
  if (!fontUrl) {
    throw new Error(
      `No TTF/OTF source found for "${family}" (${weight}) in Google Fonts CSS`,
    );
  }

  return (await fetchWithRetry(fontUrl)).arrayBuffer();
}

// ビルド時に一度だけ実行される処理のため、一時的なネットワーク障害は指数バックオフで吸収し、
// それでも失敗した場合はビルドを失敗させる（フォント欠落の画像を配信しない）
async function fetchWithRetry(url: URL | string): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
      if (res.ok) return res;
      lastError = new Error(`HTTP ${res.status}`);
    } catch (error) {
      lastError = error;
    }
    if (attempt < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
    }
  }
  throw new Error(`Failed to fetch ${url} after ${maxAttempts} attempts`, {
    cause: lastError,
  });
}
