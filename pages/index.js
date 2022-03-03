import Link from "next/link";
import MainLayout from "../domains/shared/components/Layouts/MainLayout";
import styled from "styled-components";
import altanyData from "../data.json";
import TwoColumnsLayout from "../domains/homePage/components/Layouts/TwoColumnsLayout";
import Image from "next/image";
import Button from "../domains/shared/components/Button/Button";
import Listing from "../domains/homePage/components/Listing/Listing";
import IMG_6697 from "../public/images/IMG_6697-min.jpeg";
import IMG_6448 from "../public/images/IMG_6448-min.jpeg";
import { Navigation } from "../domains/shared/components/Navigation/Navigation";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const availableImagesInDirectory = altanyData["altanyData"].map(
    ({ name }) => {
      const dirName = name.includes("-")
        ? name.split("-").pop()
        : name.split(" ").pop();

      const fs = require("fs");
      const dir = `./public/images/offers/${dirName.toUpperCase()}`;

      return fs.readdirSync(dir);
    }
  );

  return {
    props: { dataFromStaticProps: altanyData, availableImagesInDirectory }, // will be passed to the page component as props
  };
}

const Home = ({ dataFromStaticProps, availableImagesInDirectory }) => {
  const isDesktop = useIsDesktop();
  const [imageScale, setImageScale] = useState(1.0);

  useEffect(() => {
    const handleScroll = () => {
      setImageScale((window.scrollY + 10000) / 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout isHome={true}>
      {!isDesktop ? <Navigation /> : null}
      <HomeContainer>
        <TwoColumnsLayout className="heroSectionColumns">
          <div className="column imgColumn">
            <div className="logo">
              {isDesktop ? (
                <Image
                  quality={50}
                  src="/images/logo.svg"
                  width={250}
                  height={50}
                  alt="Your Name"
                />
              ) : null}
            </div>

            <ScrollableImage className="imageWrapper" zoom={imageScale}>
              <Image
                quality={50}
                alt=""
                src={IMG_6697}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </ScrollableImage>
          </div>
          <HeroSection className="column heroSection">
            <div className="globalMargin">
              {isDesktop ? <Navigation /> : null}

              <h1>Najlepsze altany drewniane w województwie śląskim</h1>
              <p>
                Dokładamy wszelkich starań aby nasze produkty były najwyższej
                jakości. Sami strugamy i suszymy drewno. Nasze produkty to 100%
                zadowolonych klientów z których wiele jest z polecenia.
              </p>

              <Link href={"#oferta"} passHref>
                <Button className="seeOffersButton">ZOBACZ OFERTY </Button>
              </Link>
            </div>
          </HeroSection>
        </TwoColumnsLayout>
        <TwoColumnsLayout columnReverse className="heroSectionColumns">
          <div className="column" id="heroDescription">
            <div className="globalMargin">
              <h1>Jakość i precyzja</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lacinia porta laoreet. Donec scelerisque eleifend cursus.
                Vestibulum luctus, quam non mollis tempus, arcu ante molestie
                sapien, tempus faucibus orci elit rutrum metus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lacinia porta laoreet. Donec scelerisque eleifend cursus.
                Vestibulum luctus, quam non mollis tempus, arcu ante molestie
                sapien, tempus faucibus orci elit rutrum metus.
              </p>
            </div>
          </div>
          <div className="column imgColumn">
            <ScrollableImage className="imageWrapper" zoom={imageScale}>
              <Image
                quality={50}
                alt=""
                src={IMG_6448}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </ScrollableImage>
          </div>
        </TwoColumnsLayout>
        <div className="globalPadding" id="ofertaIntro">
          <span className="borderBox"></span>
          <h4>OFERTA</h4>
          <span className="borderBox"></span>
        </div>
        <Listing
          hashId="oferta"
          dataFromStaticProps={dataFromStaticProps}
          availableImagesInDirectory={availableImagesInDirectory}
        />
      </HomeContainer>
    </MainLayout>
  );
};

export default Home;

const HomeContainer = styled.div`
  .imageWrapper {
    position: relative;
    height: 100% !important;
  }

  #ofertaIntro {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .borderBox {
      height: 70%;
      width: 50px;
      display: block;
      align-self: flex-end !important;
      &:first-of-type {
        border-left: 1px solid white;
        border-top: 1px solid white;
      }
      &:nth-of-type(2) {
        border-right: 1px solid white;
        border-top: 1px solid white;
      }
    }
    color: white;
    height: 100px;
    background-color: ${({ theme }) => theme.brown};
  }
`;

const HeroSection = styled.div`
  background-color: ${({ theme }) => theme.brown};
  background-image: url("data:image/svg+xml,%3Csvg width='720' height='236' viewBox='0 0 720 236' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L720 236H0V0Z' fill='%23928583' fill-opacity='0.4'/%3E%3Cpath d='M720 0L-6.10352e-05 236H720V0Z' fill='%23928583' fill-opacity='0.4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  .seeOffersButton {
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      color: ${({ theme }) => theme.blue};
      border: 1px solid #ffd70052;
    }
  }

  @media screen and (max-width: 1023px) {
    button {
      width: 155px;
      font-size: 14px;
      height: 44.98px;
      margin-bottom: 140px;
    }
  }

  h1 {
    padding: 60px 0;
  }
  @media screen and (min-width: 1023px) {
    h1 {
      padding: 116px 0 36px;
    }
  }
  h1,
  p {
    margin: 0;
    color: white;
    padding-bottom: 70px;
  }
`;

const ScrollableImage = styled.div`
  img {
    transform: ${({ zoom }) => `scale(${zoom / 100})`};
  }
`;
