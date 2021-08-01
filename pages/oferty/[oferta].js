import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import altanyData from "../../data.json";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { parse } from "querystring";

export default function Page({ dataFromStaticProps }) {
  // const router = useRouter();
  // const { asPath } = router;

  // const altanaNameFromUrl = asPath.split("/")[2].split("-").join(" ");
  // const matchedAltanaFromJSON = altanyData.find((item) => {
  //   return item.nazwa === altanaNameFromUrl;
  // });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* <h1 className="title">{matchedAltanaFromJSON.nazwa}</h1>
        <p>{matchedAltanaFromJSON.daneTechniczne.dodatkoweInfo}</p> */}

        <Image
          src="/images/test.jpg"
          height={500} // Desired size with correct aspect ratio
          width={900} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { dataFromStaticProps: altanyData }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  const paths = altanyData["altanyData"].map((altana) => ({
    params: {
      oferta: altana.url,
    },
  }));

  return { paths, fallback: false };
}
