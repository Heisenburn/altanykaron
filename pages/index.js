import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";
import altanyData from "../data.json";
import TwoColumnsLayout from "../styledComponents/TwoColumnsLayout";
import Image from "next/image";
import Container from "../styledComponents/container";
import Button from "../components/button";

import IMG_6697 from "../public/images/IMG_6697-min.jpeg";
import IMG_6448 from "../public/images/IMG_6448-min.jpeg";
import { useState } from "react";
import { Navigation } from "../components/navigation";
import { checkIfDesktop } from "../hooks/checkIfDesktop";

export default function Home({ dataFromStaticProps }) {
  const dataFromStaticPropsLength = dataFromStaticProps["altanyData"].length;

  const [isListingExpanded, setListingExpanded] = useState(false);

  const numberOfElementsToRender = isListingExpanded
    ? dataFromStaticPropsLength
    : 5;

  const isDesktop = checkIfDesktop();

  return (
    <Layout home>
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
            <Container>
              {isDesktop ? <Navigation /> : null}

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
        <TwoColumnsLayout columnReverse className="heroSectionColumns">
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
        <div id="ofertaIntro">
          <Container>
            <span className="borderBox"></span>
            <h4>OFERTA</h4>
            <span className="borderBox"></span>
          </Container>
        </div>
        <Listing id="oferty">
          <Container>
            {/* TODO! tu problemy w konsoli zobacz */}
            <ul>
              {dataFromStaticProps["altanyData"]
                .slice(0, numberOfElementsToRender)
                .map(({ name, shortDescription, price, url }) => {
                  return (
                    <li key={url}>
                      <div className="imageWrapper">
                        <Image
                          quality={1}
                          src={IMG_6448}
                          width={307}
                          height={270}
                          placeholder="blur"
                          layout="responsive"
                          alt={`zdjecie oferty: ${name}`}
                        />
                      </div>
                      <div className="listingItem-data">
                        <h3 key={name}>{name} - </h3>
                        <p>{shortDescription}</p>
                        <p>
                          <strong>{price} zł</strong>
                        </p>
                        {/* tu sie upewnic czy link taki sam serwer i klient */}

                        <Button className="priceButton">
                          <Link
                            key={url + name}
                            href={
                              "oferty/" +
                              name.toLowerCase().replace(/\s+/g, "-")
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
            <div className="triangle"></div>
            {!isListingExpanded ? (
              <Button
                className="seeAllOffers"
                onClick={() => setListingExpanded(true)}
              >
                {"Zobacz pozostałe oferty"}
              </Button>
            ) : null}
          </Container>
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
  & > div {
    padding-bottom: 134px;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

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

  ul {
    margin-top: 0;
    padding: 140px 60px 0;
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1023px) {
      padding: 0;
      margin: 0;
    }
  }
  li {
    width: 100%;
    background: white;
    margin: 52px 0;
    max-width: 1400px;
    z-index: 1;
    position: relative;

    display: flex;
    @media screen and (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin: 97px 0;
    }

    .imageWrapper {
      width: 307px;
      height: 270px !important;
      @media screen and (max-width: 1023px) {
        width: 100%;
      }
      & > div {
        width: 307px;
        height: 100%;
        @media screen and (max-width: 1023px) {
          height: 208px;
          width: auto;
        }
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

      @media screen and (max-width: 1023px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        text-align: center;
      }

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

      @media screen and (max-width: 1023px) {
        position: static;
        padding: 0;
        width: 100%;
      }

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
  @media screen and (max-width: 1023px) {
    /* padding-top: 100px; */
  }
  .imageWrapper {
    position: relative;
    height: 100% !important;
  }

  #ofertaIntro {
    & > div {
      height: 100%;

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
