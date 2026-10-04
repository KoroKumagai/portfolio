// 全レスポンスに付与するセキュリティヘッダ（単一の情報源）。
// 静的エクスポートでは next.config.ts の headers() が効かないため、
// app/%5Fheaders/route.ts で Cloudflare Pages の _headers ファイルとして出力する

// CSP を変更する際は一時的に true（Report-Only）にし、PR のプレビュー環境で違反がないことを確認してから適用する
const cspReportOnly = false;

// nonce 方式は全ページが動的レンダリングになり Core Web Vitals とキャッシュ効率を損なうため、
// 'unsafe-inline' を許可する静的な CSP とする（詳細は AGENTS.md「セキュリティヘッダ」）。
// 外部リソースを追加する場合は、ここの許可リストも更新する
const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
];

export const securityHeaders = [
  {
    key: cspReportOnly
      ? "Content-Security-Policy-Report-Only"
      : "Content-Security-Policy",
    value: cspDirectives.join("; "),
  },
  // .dev TLD は HSTS preload 済みのため preload 指定は不要
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];
