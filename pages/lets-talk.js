import Head from "next/head";
import React from "react";
import LetsTalk from "../src/components/letsTalk/letsTalk/letsTalk";

const LetsTalks = ({ footerData }) => {
  return (
    <>
      <Head>
        <title>Virtual Experts | Let&apos;s Talk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LetsTalk footerData={footerData} />
    </>
  );
};

export default LetsTalks;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/footer");
  const footerData = await res.json();

  return {
    props: {
      footerData,
    },
  };
}
