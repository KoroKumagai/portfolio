import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages に静的ファイルとして配信する（サーバー処理が必要になった場合は Pages Functions で補う）。
  // headers() は静的エクスポートでは効かないため、セキュリティヘッダは app/%5Fheaders/route.ts で _headers として出力する
  // X-Powered-By も Next.js のサーバーが付けるものなので、静的配信では出力されない（poweredByHeader は不要）
  output: "export",
};

export default nextConfig;
