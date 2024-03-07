import "@mantine/core/styles.css";
import "../styles/fonts.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "../styles/theme";
import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
  }, []);

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title key="title">Salvador Deli</title>
        <meta property="og:title" content="Salvador Deli" key="og:title" />

        <meta name="description" key="description">
          Artfully Elevated Pub Food in Vero Beach, FL
        </meta>
        <meta
          property="og:description"
          content="Artfully Elevated Pub Food in Vero Beach, FL"
          key="og:description"
        />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
