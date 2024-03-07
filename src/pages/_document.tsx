import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
        <meta
          name="msapplication-config"
          content="/assets/icons/browserconfig.xml"
        />
      </Head>

      <body
        style={{
          visibility: "hidden",
          opacity: 0,
          transition: "opacity 50ms ease-in-out",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
