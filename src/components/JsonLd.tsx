import type { Graph, Thing, WithContext } from "schema-dts";

type JsonLdProps = {
  data: Graph | WithContext<Exclude<Thing, string>>;
};

// application/ld+json は実行されないため next/script ではなくネイティブの <script> を使う。
// </script> による埋め込み脱出（XSS）を防ぐため、< を < にエスケープする
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
