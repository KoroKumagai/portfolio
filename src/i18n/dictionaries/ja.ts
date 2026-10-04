export const ja = {
  profile: {
    name: "Koro Kumagai",
    role: "Backend / Cloud Engineer",
    catchphrase: "クラウドと自動化で業務を効率化します",
  },
  a11y: {
    skipToContent: "本文へスキップ",
  },
  breadcrumb: {
    home: "ホーム",
  },
  privacy: {
    title: "プライバシーポリシー",
    description:
      "本サイトにおける個人情報の取り扱い、アクセス解析、Cookie の使用について説明します。",
    lastModifiedLabel: "最終更新日",
    intro:
      "本サイトでは、訪問者の個人情報およびアクセス情報を以下のとおり取り扱います。",
    sections: [
      {
        heading: "取得する情報と利用目的",
        paragraphs: [
          "メールでお問い合わせいただいた場合、お名前・メールアドレス・お問い合わせ内容を取得します。これらは、お問い合わせへの回答と、それに必要なご連絡のためにのみ利用します。",
        ],
      },
      {
        heading: "第三者への提供",
        paragraphs: [
          "取得した個人情報は、法令に基づく場合を除き、ご本人の同意なく第三者に提供しません。",
        ],
      },
      {
        heading: "保管と削除",
        paragraphs: [
          "取得した個人情報は、利用目的の達成に必要な期間に限り保管し、不要になった時点で削除します。",
        ],
      },
      {
        heading: "アクセス解析",
        paragraphs: [
          "本サイトでは、アクセス状況と表示速度（Core Web Vitals）を把握するため、Cloudflare, Inc. が提供する Cloudflare Web Analytics を利用しています。",
          "Cloudflare Web Analytics は Cookie やブラウザのストレージを使用せず、個人を識別・追跡しない方式で、閲覧したページの URL、参照元、ブラウザ・OS・端末の種類、表示速度などの情報を収集します。",
        ],
        links: [
          {
            label: "Cloudflare のプライバシーポリシー",
            href: "https://www.cloudflare.com/privacypolicy/",
          },
        ],
      },
      {
        heading: "サイトの配信とセキュリティ",
        paragraphs: [
          "本サイトは Cloudflare を通じて配信しています。配信と不正アクセス対策のため、Cloudflare が IP アドレスなどのアクセス情報を処理します。",
          "不正なアクセスが疑われる場合、Cloudflare が確認画面を表示し、その結果を保持するための Cookie を一時的に設定することがあります。",
        ],
      },
      {
        heading: "Cookie の使用",
        paragraphs: [
          "本サイトは、上記「サイトの配信とセキュリティ」に記載した場合を除き、Cookie を使用しません。",
        ],
      },
      {
        heading: "開示・訂正・削除などのご請求",
        paragraphs: [
          "ご本人から個人情報の開示・訂正・利用停止・削除などのご請求があった場合は、ご本人であることを確認のうえ、法令に従って対応します。下記のお問い合わせ先までご連絡ください。",
        ],
      },
      {
        heading: "本ポリシーの改定",
        paragraphs: [
          "本ポリシーは、必要に応じて改定することがあります。改定した場合は、このページで公表します。",
        ],
      },
    ],
    contactHeading: "お問い合わせ先",
  },
};

export type Dictionary = typeof ja;
