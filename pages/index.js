import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styled from "styled-components";
import altanyData from "../data.json";
const StyledTitle = styled.h1`
  color: red;
`;

const AltanaName = styled.p`
  text-transform: capitalize;
`;

export default function Home({ dataFromStaticProps }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>index</p>
      <Layout home>
        <StyledTitle>HOME</StyledTitle>
        <ul>
          {dataFromStaticProps["altanyData"].map((item) => {
            return (
              <li key={item.url}>
                <AltanaName>{item.nazwa} - </AltanaName>
                <Link href={"oferty/" + item.nazwa.split(" ").join("-")}>
                  url
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="oferty/altana-a1">Idz do oferty a1</Link>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { dataFromStaticProps: altanyData }, // will be passed to the page component as props
  };
}
