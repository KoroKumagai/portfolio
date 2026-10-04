import { JsonLd } from "@/components/JsonLd";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { formatDate } from "@/lib/formatDate";
import { buildPageMetadata } from "@/lib/metadata";
import { pages } from "@/lib/pages";
import { contactEmail } from "@/lib/site";
import { buildBreadcrumbList } from "@/lib/structuredData";

const { privacy, profile } = getDictionary(defaultLocale);

export const metadata = buildPageMetadata({
  locale: defaultLocale,
  title: privacy.title,
  description: privacy.description,
  path: pages.privacy.path,
});

const linkClassName = "underline underline-offset-4 hover:no-underline";

export default function PrivacyPage() {
  const { lastModified, path } = pages.privacy;

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32">
      <article>
        <header>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {privacy.title}
          </h1>
          <p className="mt-4 font-mono text-sm text-muted">
            {privacy.lastModifiedLabel}:{" "}
            <time dateTime={lastModified}>
              {formatDate(lastModified, defaultLocale)}
            </time>
          </p>
        </header>

        <p className="mt-10 leading-8">{privacy.intro}</p>

        {privacy.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-xl font-bold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-8">
                {paragraph}
              </p>
            ))}
            {section.links && (
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={linkClassName}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-12">
          <h2 className="text-xl font-bold">{privacy.contactHeading}</h2>
          <address className="mt-4 leading-8 not-italic">
            {profile.name}
            <br />
            <a href={`mailto:${contactEmail}`} className={linkClassName}>
              {contactEmail}
            </a>
          </address>
        </section>
      </article>

      <JsonLd
        data={buildBreadcrumbList(defaultLocale, [
          { name: privacy.title, path },
        ])}
      />
    </div>
  );
}
