import "../globalStyles/globalStyles.css";
import Head from "next/head";
import { useScrollRestoration } from "../hooks/useScrollRestoration";
export default function App({ Component, pageProps, router }) {
  if (typeof window !== "undefined") {
    const shouldRestorePosition = sessionStorage.getItem(
      "shouldRestorePosition"
    );

    if (router.route === "/" && JSON.parse(shouldRestorePosition)) {
      useScrollRestoration(router);
    }
  }
  return (
    <>
      <Head>
        <title>Domki i grzybki ogrodowe | altanykaron.pl</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
