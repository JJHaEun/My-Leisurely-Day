import { AppProps } from "next/app";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSettings from "../src/components/commons/apollo";
import Layout from "../src/commons/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSettings>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSettings>
    </RecoilRoot>
  );
}
