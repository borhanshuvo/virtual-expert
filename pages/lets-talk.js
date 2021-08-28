import Head from "next/head";
import React from "react";
import LetsTalk from "../src/components/letsTalk/letsTalk/letsTalk";

const LetsTalks = ({ footerData, metaLetsTalk }) => {
  return (
    <>
      <Head>
      <title>{metaLetsTalk.title ?  `Virtual Experts |  ${metaLetsTalk.title}` : 'virtual Experts | Lets Talk'}</title>
        {/* <title>Virtual Experts | Let&apos;s Talk</title> */}
        <meta name="description" content={metaLetsTalk.description ? ` ${metaLetsTalk.description}` : 'virtual Experts' }/>
      </Head>
      <LetsTalk footerData={footerData} />
    </>
  );
};

export default LetsTalks;

export async function getServerSideProps() {
  const res = await fetch("https://sleepy-mesa-08037.herokuapp.com/footer");
  const footerData = await res.json();

  const resmetaLetsTalk = await fetch('http://localhost:8000/metaLetsTalk')
  const metaLetsTalk = await resmetaLetsTalk.json()

  return {
    props: {
      footerData,
      metaLetsTalk:metaLetsTalk[0]
    },
  };
}
