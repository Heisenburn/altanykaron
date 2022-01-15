import Link from "next/link";
import MainLayout from "../components/Layouts/MainLayout";
import styled from "styled-components";
import altanyData from "../data.json";
import TwoColumnsLayout from "../components/Layouts/TwoColumnsLayout";
import Image from "next/image";
import Button from "../components/Button/Button";
import Listing from "../components/Listing/Listing";
import IMG_6697 from "../public/images/IMG_6697-min.jpeg";
import IMG_6448 from "../public/images/IMG_6448-min.jpeg";
import { Navigation } from "../components/Navigation/Navigation";
import { checkIfDesktop } from "../hooks/checkIfDesktop";

export async function getStaticProps() {
  //get data at build time
  return {
    props: { dataFromStaticProps: altanyData }, // will be passed to the page component as props
  };
}

const Home = ({ dataFromStaticProps }) => {
  const isDesktop = checkIfDesktop();

  return (
    <MainLayout isHome={true}>
      {!isDesktop ? <Navigation /> : null}
      <HomeContainer>
        <TwoColumnsLayout className="heroSectionColumns">
          <div className="column imgColumn">
            <div className="logo">
              {isDesktop ? (
                <Image
                  quality={1}
                  src="/images/logo.svg"
                  width={250}
                  height={50}
                  alt="Your Name"
                />
              ) : null}
            </div>

            <div className="imageWrapper">
              <Image
                quality={1}
                alt=""
                src={IMG_6697}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
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
                <Button>ZOBACZ OFERTY </Button>
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
            <div className="imageWrapper">
              <Image
                quality={1}
                alt=""
                src={IMG_6448}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
        </TwoColumnsLayout>
        <div className="globalPadding" id="ofertaIntro">
          <span className="borderBox"></span>
          <h4>OFERTA</h4>
          <span className="borderBox"></span>
        </div>
        <Listing id="oferta" dataFromStaticProps={dataFromStaticProps} />
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
  background-image: url("/images/triangles.svg");

  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

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
