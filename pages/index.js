import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";
import altanyData from "../data.json";
import TwoColumnsLayout from "../styledComponents/TwoColumnsLayout";
import Image from "next/image";
import Container from "../styledComponents/container";
import Button from "../components/button";
import { NavigationHome } from "../styledComponents/nav";
import IMG_6697 from "../public/images/IMG_6697-min.jpeg";
import IMG_6448 from "../public/images/IMG_6448-min.jpeg";
import { useEffect } from "react";
export default function Home({ dataFromStaticProps }) {
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      document.getElementById("test").style.width = 100 + scrollTop / 5 + "%";
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout home>
      <HomeContainer>
        <TwoColumnsLayout>
          <div className="column">
            <div className="logo">
              <Image
                src="/images/logo.svg"
                width={250}
                height={50}
                layout="responsive"
                alt="Your Name"
              />
            </div>

            <div className="imageWrapper">
              <Image
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
              <NavigationHome>
                <ul>
                  <li>HOME</li>
                  <li>OFERTA</li>
                  <li>GALERIA</li>
                  <li>KONTAKT</li>
                </ul>
              </NavigationHome>
              <h1>Najlepsze altany drewniane w województwie śląskim</h1>
              <p>
                Dokładamy wszelkich starań aby nasze produkty były najwyższej
                jakości. Sami strugamy i suszymy drewno. Nasze produkty to 100%
                zadowolonych klientów z których wiele jest z polecenia.
              </p>
              <Button>ZOBACZ OFERTY</Button>
            </Container>
          </HeroSection>
        </TwoColumnsLayout>
        <TwoColumnsLayout>
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
                alt=""
                src={IMG_6448}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
        </TwoColumnsLayout>
        <h2 id="ofertaIntro">OFERTA</h2>

        {/* 
tu problemy w konsoli zobacz
        <ul>
          {dataFromStaticProps["altanyData"].map((item) => {
            return (
              <li key={item.url}>
                <p key={item.nazwa}>{item.nazwa} - </p>
                <Link
                  key={item.url + item.nazwa}
                  href={
                    "oferty/" + item.nazwa.toLowerCase().replace(/\s+/g, "-")
                  }
                >
                  url
                </Link>
              </li>
            );
          })}
        </ul> */}
      </HomeContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { dataFromStaticProps: altanyData }, // will be passed to the page component as props
  };
}

const HomeContainer = styled.div`
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
