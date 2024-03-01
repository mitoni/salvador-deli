import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="/assets/icons/apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/apple-touch-icon.png"
        />
        <link
          rel="/assets/icons/icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon-32x32.png"
        />
        <link
          rel="/assets/icons/icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
