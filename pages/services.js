import React from "react";
import ScheduleMeeting from "../src/components/home/scheduleMeeting/scheduleMeeting";
import Header from "../src/components/services/header/header";
import ServicesCard from "../src/components/services/servicesCard/servicesCard";
import WhatWeDo from "../src/components/services/whatWeDo/whatWeDo";

const Services = () => {
  return (
    <>
      <Header />
      <WhatWeDo />
      <ServicesCard />
      <ScheduleMeeting />
    </>
  );
};

export default Services;
