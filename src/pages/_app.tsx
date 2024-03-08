import "@mantine/core/styles.css";
import "../styles/fonts.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "../styles/theme";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
  }, []);

  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
