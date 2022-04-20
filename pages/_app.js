import "../globalStyles/globalStyles.css";
import Head from "next/head";
import { ScrollRestorationContextWrapper } from "../context/ScrollRestorationContext";
import { GallerySliderVisibilityWrapper } from "../context/GallerySliderVisibility";

export default function App({ Component, pageProps }) {
  return (
    <GallerySliderVisibilityWrapper>
      <ScrollRestorationContextWrapper>
        <Head>
          <title>Altany ogrodowe | altanykaron.pl</title>
        </Head>
        <Component {...pageProps} />
      </ScrollRestorationContextWrapper>
    </GallerySliderVisibilityWrapper>
  );
}
