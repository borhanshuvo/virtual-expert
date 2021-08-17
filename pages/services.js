import React from 'react';
import Navbar from '../src/components/navbar/navbar';
import Header from '../src/components/services/header/header';
import ServicesCard from '../src/components/services/servicesCard/servicesCard';
import WhatWeDo from '../src/components/services/whatWeDo/whatWeDo';

const Services = () => {
    return (
        <>
            <Navbar />
            <Header />
            <WhatWeDo />
            <ServicesCard />
        </>
    );
};

export default Services;