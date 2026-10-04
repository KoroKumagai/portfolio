export const ja = {
  profile: {
    name: "Koro Kumagai",
    // About と構造化データ（Person の alternateName）に使う
    nameJa: "熊谷 光路",
    role: "Backend / Cloud Engineer",
    catchphrase: "クラウドと自動化で業務を効率化します",
  },
  a11y: {
    skipToContent: "本文へスキップ",
  },
  breadcrumb: {
    home: "ホーム",
  },
  about: {
    title: "About",
    description:
      "熊谷 光路（Koro Kumagai）のプロフィールと経歴。Web アプリケーションの設計・開発・運用、AWS を中心としたクラウドインフラ、プロジェクトマネジメントの経験を紹介します。",
    introHeading: "自己紹介",
    intro: [
      "2012年よりシステム開発に従事し、Web アプリケーションを中心に、バックエンド、フロントエンド、インフラの設計・開発・運用を経験しています。",
      "Java、PHP、Python などを用いたアプリケーション開発に加え、AWS を中心としたクラウドインフラの構築・運用、データベース設計、性能改善、セキュリティ対応、CI/CD 環境の整備など、システム全体を横断して対応してきました。",
      "2019年以降はプロジェクトマネジャーとして、要件定義、顧客折衝、スケジュール・課題管理、メンバー管理、コードレビュー、見積・契約なども担当しています。2023年からは個人事業主として独立し、大手企業向けのシステム開発・運用保守案件に参画しています。",
      "特定の技術領域だけではなく、要件・データ・アプリケーション・インフラ・運用を一連のシステムとして捉え、課題を整理して解決することを得意としています。",
    ],
    strengthsHeading: "強み",
    strengths: [
      {
        heading: "システム全体を横断した設計・開発",
        paragraphs: [
          "バックエンドだけでなく、フロントエンド、データベース、クラウドインフラ、CI/CD、監視、セキュリティまで幅広く経験しています。",
          "特定のレイヤーだけを見るのではなく、データの流れやシステム間の連携、性能、運用負荷まで含めて設計・改善を行います。",
        ],
      },
      {
        heading: "要件整理・問題解決",
        paragraphs: [
          "仕様書や既存システム、ログ、データなどから状況を把握し、曖昧な要件や問題の原因を整理することを得意としています。",
          "技術的な解決だけでなく、運用方法やレビュー方法の変更なども含めて再発防止を考えます。",
        ],
      },
      {
        heading: "開発とマネジメントの両立",
        paragraphs: [
          "プロジェクトマネジャーとして顧客折衝や進行管理を行いながら、設計、コードレビュー、インフラ、障害調査など技術面にも継続して関わってきました。",
          "技術とプロジェクト管理の双方を理解した立場から、実現可能性や影響範囲を踏まえた提案を行えます。",
        ],
      },
      {
        heading: "クラウド・運用改善",
        paragraphs: [
          "AWS を中心に、監視、性能改善、コスト最適化、セキュリティ、CI/CD などの運用改善を経験しています。",
          "「動くシステムを作る」だけでなく、継続して安全・安定・効率的に運用できる状態を作ることを重視しています。",
        ],
      },
    ],
    careerHeading: "経歴",
    present: "現在",
    roleLabel: "役割",
    projectsLabel: "主な案件（順不同）",
    technologiesLabel: "主な技術",
    // 新しい順
    career: [
      {
        start: "2023-01",
        organization: "個人事業主",
        summary:
          "システム開発支援、プロジェクトマネジメント、クラウド・インフラ領域を中心に活動。Oracle Fusion ERP と各種外部システムを連携するシステムの開発・運用保守を中心に、Snowflake を用いたデータ基盤や、Web システム・API の開発支援にも携わっている。",
        role: "SE / プロジェクトマネジャー",
        // 順不同
        projects: [
          "大手化粧品メーカー向け ERP 連携システムの開発・運用保守",
          "大手自動車メーカー向け DWH 開発",
          "百貨店向け 外商 SFA システムのリプレイス",
          "商社向け 貴金属売買支援システムの API 開発",
          "人材紹介会社向け システム開発支援",
          "アパレル企業向け システム開発支援",
        ],
        technologies: [
          "Python",
          "Node.js",
          "Java",
          "Spring Boot",
          "Angular",
          "AWS",
          "DynamoDB",
          "Oracle Integration",
          "Snowflake",
          "Salesforce",
          "kintone",
          "GitHub Actions",
        ],
      },
      {
        start: "2015-06",
        end: "2022-12",
        organization: "受託開発・SI 企業（正社員）",
        summary:
          "受託開発・運用保守を中心に、製造業、福祉、介護、メディアなどの Web システムを担当。SE として設計・開発・インフラ・運用を経験し、2019年からプロジェクトマネジャーを担当した。",
        role: "SE → プロジェクトマネジャー",
        projects: [
          "製造業向け B2B システムの開発・運用保守",
          "製造業向けトレーサビリティシステムの開発・運用保守",
          "介護事業所向け SaaS の追加開発・運用保守",
          "社会福祉法人向け Web システムの運用保守",
          "派遣業向け業務システムの構築",
          "全社 AWS コスト最適化",
        ],
        technologies: ["Java", "Spring", "PHP", "MySQL", "AWS"],
      },
      {
        start: "2012-04",
        end: "2015-05",
        organization: "SES 企業（正社員）",
        summary: "システム開発・技術支援業務に従事。",
        role: "プログラマー → SE",
        projects: [
          "電力量監視 Web サービスの追加開発",
          "交通管制システムの開発",
          "販売管理システム（クライアント/サーバー型）の開発",
        ],
        technologies: ["Java", "C#", "VB.NET", "PHP", "Oracle", "SQL Server"],
      },
    ],
  },
  footer: {
    builtWith: "Built with Next.js",
    source: "Source",
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
