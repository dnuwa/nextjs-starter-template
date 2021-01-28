import React from "react";
import Head from "next/head";
import createGlobalStyle from "utils/global-styles";

import "sanitize.css/sanitize.css";

const GlobalStyles = createGlobalStyle();

// Layouts
import DefaultLayout from "containers/Layouts/default";

let layoutMap = {
  default: DefaultLayout,
};

const App = ({ Component, pageProps }) => {
  const Layout = layoutMap[Component.layout ? Component.layout : "default"];

  // const base_url = "https://uat-stream360-core-api.confero.io/dRdw";

  return (
    <React.StrictMode>
      <Head>
        <title>Infinitum 360</title>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans+Condensed:wght@100;400;600;700&family=IBM+Plex+Sans:wght@300;400;500;700&family=Roboto+Condensed:wght@100;200;300;400;500;700&family=Roboto:wght@100;200;300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://unpkg.com/video.js@7/dist/video-js.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/@videojs/themes@1/dist/city/index.css"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
