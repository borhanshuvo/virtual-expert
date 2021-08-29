import Head from "next/head";
import React from "react";
import ScheduleMeeting from "../src/components/home/scheduleMeeting/scheduleMeeting";
import Header from "../src/components/services/header/header";
import ServicesCard from "../src/components/services/servicesCard/servicesCard";
import WhatWeDo from "../src/components/services/whatWeDo/whatWeDo";

const Services = ({
  servicesCardData,
  whatWeDo,
  serviceCardHeader,
  metaService,
}) => {
  console.log(metaService, "service");
  return (
    <>
      <Head>
        <title>
          {metaService.title
            ? `Virtual Experts |  ${metaService.title}`
            : "virtual Experts | Service"}
        </title>
        <meta
          name="description"
          content={
            metaService.description
              ? ` ${metaService.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content="Amazon Marketing Services,
          amazon seller feedback,
          amazon product review,
          amazon seo,
          amazon fba consultant,
          amazonseo services,
          amazonsearch engine optimization,
          amazonseo consultant,
          amazon seo agency,
          worst amazon reviews,
          amazon bad reviews,
          amazon fba consulting services,
          listing optimization services,
          amazon negative review removal,
          how to remove bad reviews on amazon"
        />
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

  const resMetaService = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/metaService"
  );
  const metaService = await resMetaService.json();

  return {
    props: {
      servicesCardData,
      whatWeDo,
      serviceCardHeader,
      metaService: metaService[0],
    },
  };
}

export default Services;
