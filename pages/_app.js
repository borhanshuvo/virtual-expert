import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Footer from "../src/components/footer/footer";
import Navbar from "../src/components/navbar/navbar";
import "../styles/globals.css";
import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

nProgress.configure(
  { showSpinner: false },
  {
    template: "<div role='bar' className='bg-info'>...</div>",
  }
);

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [signedUser, setSignedUser] = useState({});
  //showing n-progress
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
  });
  Router.events.on("routeChangeError", () => nProgress.done());

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem("info"));
    try {
      const decoded = jwt_decode(info);
      setSignedUser(decoded);
    } catch (err) {}
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          ></link>
          <script
            async
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <UserContext.Provider value={[signedUser, setSignedUser]}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </>
    );
  }
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Navbar />
      <UserContext.Provider value={[signedUser, setSignedUser]}>
        <Component {...pageProps} />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default MyApp;
