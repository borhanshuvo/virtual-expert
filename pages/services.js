import Head from "next/head";
import React from "react";
import ScheduleMeeting from "../src/components/home/scheduleMeeting/scheduleMeeting";
import Header from "../src/components/services/header/header";
import ServicesCard from "../src/components/services/servicesCard/servicesCard";
import WhatWeDo from "../src/components/services/whatWeDo/whatWeDo";

const Services = ({ servicesCardData, whatWeDo, serviceCardHeader }) => {
  return (
    <>
      <Head>
        <title>Virtual Experts | Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <WhatWeDo whatWeDo={whatWeDo} />
      <ServicesCard
        servicesCardData={servicesCardData}
        serviceCardHeader={serviceCardHeader}
      />
      <ScheduleMeeting />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/servicesCard"
  );
  const servicesCardData = await res.json();

  const whatWeDoRes = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/whatWeDo"
  );
  const whatWeDo = await whatWeDoRes.json();

  const serviceCardHeaderRes = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/serviceCardHeader"
  );
  const serviceCardHeader = await serviceCardHeaderRes.json();

  return {
    props: {
      servicesCardData,
      whatWeDo,
      serviceCardHeader,
    },
  };
}

export default Services;
