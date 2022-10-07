import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Nav from "@components/nav";

// const Nav = dynamic(() => import("@components/nav"), { ssr: false });

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  console.log("theme", theme);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
