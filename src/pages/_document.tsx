import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Blogs created by sonht",
    description: "Collection of software development knowledge.",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="https://blogs.sonht.io.vn/large-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_sonht" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="https://blogs.sonht.io.vn/large-preview.png" />

        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
