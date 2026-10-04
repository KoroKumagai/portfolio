import Script from "next/script";

// サイトトークンは HTML に埋め込まれる公開値だが、環境ごとに有無を切り替えるため環境変数で渡す。
// 未設定時（ローカル開発など）はビーコンを読み込まない
const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

// 値の誤りは公開後に計測が欠けて初めて気づくことになるため、ビルド時に検出して失敗させる
if (token && !/^[0-9a-f]{32}$/.test(token)) {
  throw new Error(
    "NEXT_PUBLIC_CF_BEACON_TOKEN must be a 32-character lowercase hex string",
  );
}

// アクセス解析と Core Web Vitals の実ユーザー計測（RUM）を同じビーコンで取得する。
// 配信元・送信先は src/lib/securityHeaders.ts の CSP で許可している
export function CloudflareWebAnalytics() {
  if (!token) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
      // 描画とハイドレーションを妨げないよう、Next.js のコードの後に読み込む
      strategy="afterInteractive"
    />
  );
}
