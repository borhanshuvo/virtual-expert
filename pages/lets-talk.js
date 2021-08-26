import Head from "next/head";
import React from "react";
import LetsTalk from "../src/components/letsTalk/letsTalk/letsTalk";

const LetsTalks = () => {
  return (
    <>
      <Head>
        <title>Virtual Experts | Let&apos;s Talk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LetsTalk />
    </>
  );
};

export default LetsTalks;
