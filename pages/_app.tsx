import * as React from "react";
import { AppProps } from "next/app";
import cx from "classnames";

import "../styles/globals.css";

import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container
        className={cx("min-h-[calc(100vh-66px)]", "flex", "flex-col")}
        wrapperEl="main"
      >
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
