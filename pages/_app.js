import "../globalStyles/globalStyles.css";
import Head from "next/head";
import { useScrollRestoration } from "../hooks/useScrollRestoration";

export default function App({ Component, pageProps, router }) {
  useScrollRestoration(router);
  return (
    <>
      <Head>
        <title>Domki i grzybki ogrodowe | altanykaron.pl</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
