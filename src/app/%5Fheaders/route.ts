import { securityHeaders } from "@/lib/securityHeaders";

// Cloudflare Pages の _headers ファイル（https://developers.cloudflare.com/pages/configuration/headers/）を
// ビルド時に生成する。フォルダ名の %5F は URL の先頭 "_" を表す（"_" 始まりはプライベートフォルダになるため）
export const dynamic = "force-static";

type HeaderRule = {
  path: string;
  headers: { key: string; value: string }[];
};

const rules: HeaderRule[] = [
  { path: "/*", headers: securityHeaders },
  // ファイル名にビルドごとのハッシュが含まれ内容が変わらないため、再検証なしで長期キャッシュさせる
  {
    path: "/_next/static/*",
    headers: [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ],
  },
  // 静的エクスポートでは拡張子なしのファイルとして出力され、Pages が画像として配信しないため明示する
  // （値は app/opengraph-image.tsx の contentType と合わせる）
  {
    path: "/opengraph-image",
    headers: [{ key: "Content-Type", value: "image/png" }],
  },
];

export function GET() {
  const body = rules
    .map(({ path, headers }) =>
      [path, ...headers.map(({ key, value }) => `  ${key}: ${value}`)].join(
        "\n",
      ),
    )
    .join("\n\n");
  return new Response(`${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
