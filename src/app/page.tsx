import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildPageMetadata, getSiteTitle } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  locale: defaultLocale,
  title: { absolute: getSiteTitle(defaultLocale) },
  description: getDictionary(defaultLocale).profile.catchphrase,
  path: "/",
});

export default function Home() {
  const { profile } = getDictionary(defaultLocale);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32">
      <section>
        <hgroup>
          <p className="font-mono text-sm text-muted">{profile.role}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
        </hgroup>
        <p className="mt-6 text-lg leading-8">{profile.catchphrase}</p>
      </section>
    </div>
  );
}
