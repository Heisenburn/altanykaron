import "../globalStyles/globalStyles.css";
import Head from "next/head";
import { ScrollRestorationContextWrapper } from "../context/ScrollRestorationContext";
export default function App({ Component, pageProps }) {
  return (
    <ScrollRestorationContextWrapper>
      <Head>
        <title>Domki i grzybki ogrodowe | altanykaron.pl</title>
      </Head>
      <Component {...pageProps} />
    </ScrollRestorationContextWrapper>
  );
}
