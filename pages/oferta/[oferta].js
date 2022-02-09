import Head from "next/head";
import MainLayout from "../../domains/shared/components/Layouts/MainLayout";
import altanyData from "../../data.json";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import SliderWrapper from "../../domains/offerPage/Slider/SliderWrapper.theme";
import Heading from "../../domains/offerPage/Heading.theme";

//needed for getting data at build time
export async function getStaticProps({ params }) {
  const { oferta } = params;
  const idFromURL = oferta.split("-").pop();
  const fs = require("fs");
  const dir = `./public/images/offers/${idFromURL}`;

  const availableImagesInDirectory = fs.readdirSync(dir);
  return {
    props: {
      dataFromStaticProps: altanyData,
      availableImagesInDirectory,
      idFromURL,
    }, // will be passed to the page component as props
  };
}

//needed for dynamic routing [oferta]
export async function getStaticPaths() {
  const paths = altanyData["altanyData"].map(({ name }) => ({
    params: {
      oferta: name.toLowerCase().replace(/\s+/g, "-"),
    },
  }));

  return { paths, fallback: false };
}

export default function Page({
  dataFromStaticProps,
  availableImagesInDirectory,
  idFromURL,
}) {
  const getImageSet = () => {
    return availableImagesInDirectory.map((src) => {
      return {
        original: `/images/offers/${idFromURL}/${src}`,
        thumbnail: `/images/offers/${idFromURL}/${src}`,
      };
    });
  };

  const [altanyItem] = dataFromStaticProps["altanyData"].filter(
    (item) => item.ID === idFromURL.toUpperCase()
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <SliderWrapper>
          <Heading>
            <h1>{altanyItem.name}</h1>
            <p>Cena: 2500zł</p>
          </Heading>
          <ImageGallery
            items={getImageSet()}
            showPlayButton={false}
            lazyLoad={true}
            useBrowserFullscreen={false}
            useTranslate3D={true}
          />
        </SliderWrapper>
      </MainLayout>
    </>
  );
}
