import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import altanyData from "../../data.json";

export default function Page({ dataFromStaticProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* <h1 className="title">{matchedAltanaFromJSON.name}</h1>
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
      oferta: altana.name.toLowerCase().replace(/\s+/g, "-"),
    },
  }));

  return { paths, fallback: false };
}
