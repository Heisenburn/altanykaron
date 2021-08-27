import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";
import altanyData from "../data.json";
import TwoColumnsLayout from "../styledComponents/TwoColumnsLayout";
import Image from "next/image";
import Container from "../styledComponents/container";
import Button from "../components/button";
import { Navigation, NavigationMobile } from "../styledComponents/nav";
import IMG_6697 from "../public/images/IMG_6697-min.jpeg";
import IMG_6448 from "../public/images/IMG_6448-min.jpeg";
import { useState } from "react";
import { checkIfDesktop } from "../hooks/checkIfDesktop";

const NAV_ELEMENTS = ["home", "oferta", "cennik", "kontakt"];

export default function Home({ dataFromStaticProps }) {
  const dataFromStaticPropsLength = dataFromStaticProps["altanyData"].length;

  const [isListingExpanded, setListingExpanded] = useState(false);
  const shouldRenderMoreOffersButton =
    dataFromStaticPropsLength > 5 ? true : false;

  const numberOfElementsToRender = isListingExpanded
    ? dataFromStaticPropsLength
    : 5;

  const isDesktop = checkIfDesktop();

  return (
    <Layout home>
      <HomeContainer>
        <TwoColumnsLayout className="heroSectionColumns">
          <div className="column">
            <div className="logo">
              <Image
                quality={1}
                src="/images/logo.svg"
                width={250}
                height={50}
                layout="responsive"
                alt="Your Name"
              />
            </div>

            <div className="imageWrapper">
              <Image
                quality={1}
                id="test"
                alt=""
                src={IMG_6697}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
          <HeroSection className="column heroSection">
            <Container>
              {isDesktop ? (
                <Navigation>
                  <ul>
                    {NAV_ELEMENTS.map((linkElement) => {
                      return <li>{linkElement}</li>;
                    })}
                  </ul>
                </Navigation>
              ) : (
                <NavigationMobile>
                  <Image
                    src="/images/icons/complex.svg"
                    width={43}
                    height={43}
                    alt="Your Name"
                  />
                </NavigationMobile>
              )}

              <h1>Najlepsze altany drewniane w województwie śląskim</h1>
              <p>
                Dokładamy wszelkich starań aby nasze produkty były najwyższej
                jakości. Sami strugamy i suszymy drewno. Nasze produkty to 100%
                zadowolonych klientów z których wiele jest z polecenia.
              </p>

              <Link href={"#oferty"} passHref>
                <Button>ZOBACZ OFERTY </Button>
              </Link>
            </Container>
          </HeroSection>
        </TwoColumnsLayout>
        <TwoColumnsLayout className="heroSectionColumns">
          <div className="column" id="heroDescription">
            <Container>
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
            </Container>
          </div>
          <div className="column">
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
        <h3 id="ofertaIntro">OFERTA</h3>

        <Listing id="oferty">
          <Container>
            {/* TODO! tu problemy w konsoli zobacz */}
            <ul>
              {dataFromStaticProps["altanyData"]
                .slice(0, numberOfElementsToRender)
                .map((item) => {
                  return (
                    <li key={item.url}>
                      <div className="imageWrapper">
                        <Image
                          quality={1}
                          src={IMG_6448}
                          width={307}
                          height={270}
                          placeholder="blur"
                          layout="responsive"
                          alt={`zdjecie oferty: ${item.name}`}
                        />
                      </div>
                      <div className="listingItem-data">
                        <h3 key={item.name}>{item.name} - </h3>
                        <p>{item.shortDescription}</p>
                        <p>
                          <strong>{item.price} zł</strong>
                        </p>
                        {/* tu sie upewnic czy link taki sam serwer i klient */}

                        <Button className="priceButton">
                          <Link
                            key={item.url + item.name}
                            href={
                              "oferty/" +
                              item.name.toLowerCase().replace(/\s+/g, "-")
                            }
                          >
                            WIĘCEJ
                          </Link>
                        </Button>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </Container>
          <div className="triangle"></div>
          {shouldRenderMoreOffersButton ? (
            <Button
              className="seeAllOffers"
              onClick={() => setListingExpanded((prevState) => !prevState)}
            >
              {isListingExpanded ? "MNIEJ" : "WIĘCEJ"}
            </Button>
          ) : null}
        </Listing>
      </HomeContainer>
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: { dataFromStaticProps: altanyData }, // will be passed to the page component as props
  };
}

const Listing = styled.div`
  padding: 134px 0;
  background-color: ${({ theme }) => theme.gray};
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  .seeAllOffers {
    background: #a21c26;
    color: white;
    display: block;
    margin: 0 auto;
    font-size: 16px;
    position: relative;
    z-index: 9;
  }

  .triangle {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 130vh 500vw;
    border-color: transparent transparent #57423f2e transparent;
    position: absolute;
    left: -400vw;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  li {
    background: white;
    margin: 52px 98px;
    z-index: 1;
    position: relative;

    display: flex;

    .imageWrapper {
      width: 307px;
      height: 270px !important;
      & > div {
        width: 307px;
        height: 100%;
      }
      img {
        object-fit: cover;
      }
    }

    .listingItem-data {
      width: 100%;
      padding-left: 38px;
      display: flex;
      flex-direction: column;
      position: relative;
      h3 {
        margin-top: 23px;
      }
    }

    .priceButton {
      background-color: ${({ theme }) => theme.blue};
      width: 146px;
      height: 50px;
      position: absolute;
      bottom: 23px;
      right: 38px;

      a {
        text-decoration: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const HomeContainer = styled.div`
  .imageWrapper {
    position: relative;
    height: 100% !important;
  }

  #ofertaIntro {
    color: white;
    background-color: ${({ theme }) => theme.brown};
    height: 142px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const HeroSection = styled.div`
  background-color: ${({ theme }) => theme.brown};
  background-image: url("/images/triangles.svg");

  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  h1 {
    padding: 116px 0 36px;
  }
  h1,
  p {
    margin: 0;
    color: white;
    padding-bottom: 70px;
  }
`;
