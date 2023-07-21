import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "@src/layout/Layout";
import { Toaster } from "react-hot-toast";
import "@src/styles/globals.css";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { NextQueryParamProvider } from "next-query-params";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps, ...appProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="preload" as="image" href="/sprite.svg" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <div>
        <NextQueryParamProvider>
          {appProps.router.pathname.indexOf("/exam-portal/") > -1 ? (
            getLayout(<Component {...pageProps} />)
          ) : (
            <Layout>
              <Component {...pageProps} />
              <Toaster position="bottom-right" />
            </Layout>
          )}
        </NextQueryParamProvider>
      </div>
    </>
  );
};

export default App;
