import { JsonLd } from "@/components/JsonLd";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { formatYearMonth } from "@/lib/formatDate";
import { buildPageMetadata } from "@/lib/metadata";
import { pages } from "@/lib/pages";
import { buildBreadcrumbList, buildProfilePage } from "@/lib/structuredData";

const { about, profile } = getDictionary(defaultLocale);

export const metadata = buildPageMetadata({
  locale: defaultLocale,
  title: about.title,
  description: about.description,
  path: pages.about.path,
  type: "profile",
});

// 縦並び（狭い画面）のときだけ、項目の間に余白を入れる
const termClassName = "mt-2 text-muted first:mt-0 sm:mt-0";

export default function AboutPage() {
  const { path } = pages.about;

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {about.title}
        </h1>
        <p className="mt-6 text-lg">
          {profile.nameJa}（{profile.name}）
        </p>
        <p className="mt-1 font-mono text-sm text-muted">{profile.role}</p>
      </header>

      <section className="mt-16">
        <h2 className="text-xl font-bold">{about.introHeading}</h2>
        {about.intro.map((paragraph) => (
          <p key={paragraph} className="mt-4 leading-8">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-bold">{about.strengthsHeading}</h2>
        {about.strengths.map((strength) => (
          <section key={strength.heading} className="mt-8">
            <h3 className="text-lg font-bold">{strength.heading}</h3>
            {strength.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-8">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-bold">{about.careerHeading}</h2>
        <ol className="mt-6 space-y-12">
          {about.career.map((entry) => (
            <li key={entry.start} className="border-l border-border pl-6">
              <p className="font-mono text-sm text-muted">
                <time dateTime={entry.start}>
                  {formatYearMonth(entry.start, defaultLocale)}
                </time>
                {" – "}
                {entry.end ? (
                  <time dateTime={entry.end}>
                    {formatYearMonth(entry.end, defaultLocale)}
                  </time>
                ) : (
                  about.present
                )}
              </p>
              <h3 className="mt-2 text-lg font-bold">{entry.organization}</h3>
              <p className="mt-3 leading-8">{entry.summary}</p>
              {/* 狭い画面ではラベルと値を縦に並べ、値の列が細くなりすぎないようにする */}
              <dl className="mt-4 grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[auto_1fr] sm:gap-y-2">
                <dt className={termClassName}>{about.roleLabel}</dt>
                <dd>{entry.role}</dd>
                <dt className={termClassName}>{about.projectsLabel}</dt>
                <dd>
                  <ul className="space-y-1">
                    {entry.projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </dd>
                <dt className={termClassName}>{about.technologiesLabel}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono">
                    {entry.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <JsonLd
        data={buildProfilePage(defaultLocale, { name: about.title, path })}
      />
      <JsonLd
        data={buildBreadcrumbList(defaultLocale, [{ name: about.title, path }])}
      />
    </div>
  );
}
