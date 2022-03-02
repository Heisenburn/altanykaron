import "../globalStyles/globalStyles.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Domki i grzybki ogrodowe | altanykaron.pl</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
