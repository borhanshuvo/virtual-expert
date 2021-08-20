import React from "react";
import ScheduleMeeting from "../src/components/home/scheduleMeeting/scheduleMeeting";
import Header from "../src/components/services/header/header";
import ServicesCard from "../src/components/services/servicesCard/servicesCard";
import WhatWeDo from "../src/components/services/whatWeDo/whatWeDo";

const Services = ({servicesCardData}) => {
  return (
    <>
      <Header />
      <WhatWeDo />
      <ServicesCard servicesCardData={servicesCardData} />
      <ScheduleMeeting />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:8000/servicesCard");
  const servicesCardData = await res.json();
  return {
    props: {
      servicesCardData,
    },
  };
}

export default Services;
