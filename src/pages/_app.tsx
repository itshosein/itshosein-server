import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { Grid, CssBaseline } from "@mui/material";
import theme from "../theme";
import Nav from "@components/nav";
import Footer from "@components/footer";

// const Nav = dynamic(() => import("@components/nav"), { ssr: false });

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  // console.log("theme", theme);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Grid
          sx={{
            minHeight: "calc(100vh - 200px)",
          }}
          container
          xs={12}
        >
          <Component {...pageProps} />
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
}
