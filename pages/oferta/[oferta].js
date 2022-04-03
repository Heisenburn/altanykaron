import Head from "next/head";
import MainLayout from "../../domains/shared/components/Layouts/MainLayout";
import altanyData from "../../data.json";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import SliderWrapper from "../../domains/offerPage/Slider/SliderWrapper.theme";
import Heading from "../../domains/offerPage/Heading.theme";
import DetailsTable from "../../domains/offerPage/DetailsTable/DetailsTable";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import Link from "next/link";
import { forwardRef, useContext } from "react";
import {
  ScrollRestorationContext,
  ScrollRestorationContextWrapper,
} from "../../context/ScrollRestorationContext";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";
import { useRouter } from "next/router";

//needed for getting data at build time
export async function getStaticProps({ params }) {
  const { oferta } = params;
  const idFromURL = oferta.split("-").pop();
  const fs = require("fs");
  const dir = `./public/images/offers/${idFromURL.toUpperCase()}`;
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
      //replace empty space with dashes
      oferta: name.toLowerCase().replace(/\s+/g, "-"),
    },
  }));

  return { paths, fallback: false };
}

const CustomLink = forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Wróć do ofert
    </a>
  );
});

export default function Page({
  dataFromStaticProps,
  availableImagesInDirectory,
  idFromURL,
}) {
  const getImageSet = () => {
    return availableImagesInDirectory.map((src) => {
      return {
        original: `/images/offers/${idFromURL.toUpperCase()}/${src}`,
        thumbnail: `/images/offers/${idFromURL.toUpperCase()}/${src}`,
      };
    });
  };

  const [altanyItem] = dataFromStaticProps["altanyData"].filter((item) =>
    item.name.toLowerCase().includes(idFromURL)
  );

  // https://altaworld.olx.pl/#items

  const isDesktop = useIsDesktop();
  const { updateShouldRestore } = useContext(ScrollRestorationContext);

  const handleBackToOfferClick = () => {
    updateShouldRestore(true);
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <SliderWrapper className={isDesktop ? "globalMargin" : ""}>
          <Heading>
            <Link passHref href="/">
              <CustomLink onClick={handleBackToOfferClick}>
                Wróć do ofert
              </CustomLink>
            </Link>
            <div>
              <h1 style={{ fontStyle: "oblique" }}>{altanyItem.name}</h1>
              <p style={{ textAlign: "right" }}>Cena: {altanyItem.price}zł</p>
            </div>
          </Heading>
          <ImageGallery
            items={getImageSet()}
            showPlayButton={false}
            useTranslate3D={true}
            showFullscreenButton={isDesktop}
          />
        </SliderWrapper>
        <DetailsTable data={altanyItem.technicalDetails} />
      </MainLayout>
    </>
  );
}
