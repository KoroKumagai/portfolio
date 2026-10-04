import { ImageResponse } from "next/og";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { loadGoogleFont } from "@/lib/og/loadGoogleFont";
import { siteUrl } from "@/lib/site";

const { profile } = getDictionary(defaultLocale);
const domain = siteUrl.host;

export const alt = `${profile.name}（${profile.role}）: ${profile.catchphrase}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// 静的エクスポート（output: "export"）ではビルド時生成を明示する必要がある
export const dynamic = "force-static";

// satori は CSS 変数を解決できないため、globals.css のダークテーマ（既定）の値を写している
const colors = {
  background: "#0a0a0a",
  foreground: "#ededed",
  muted: "#a3a3a3",
  border: "#262626",
};

// フォントは描画する文字列から必要な文字だけを取得する（文言の変更にも自動で追従する）
const uniqueChars = (...texts: string[]) =>
  [...new Set(texts.join(""))].join("");

const [notoSansJpRegular, notoSansJpBold, jetbrainsMono] = await Promise.all([
  loadGoogleFont({
    family: "Noto Sans JP",
    weight: 400,
    text: uniqueChars(profile.catchphrase),
  }),
  loadGoogleFont({
    family: "Noto Sans JP",
    weight: 700,
    text: uniqueChars(profile.name),
  }),
  loadGoogleFont({
    family: "JetBrains Mono",
    weight: 400,
    text: uniqueChars(profile.role, domain),
  }),
]);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: colors.background,
          color: colors.foreground,
          fontFamily: "Noto Sans JP",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 32,
              color: colors.muted,
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </div>
          <div style={{ marginTop: 40, fontSize: 44 }}>
            {profile.catchphrase}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 32,
            borderTop: `2px solid ${colors.border}`,
            fontFamily: "JetBrains Mono",
            fontSize: 28,
            color: colors.muted,
          }}
        >
          {domain}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans JP", data: notoSansJpRegular, weight: 400 },
        { name: "Noto Sans JP", data: notoSansJpBold, weight: 700 },
        { name: "JetBrains Mono", data: jetbrainsMono, weight: 400 },
      ],
    },
  );
}
