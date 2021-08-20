import Head from "next/head";
import Amazon from "../src/components/home/amazon/amazon";
import Banner from "../src/components/home/banner/banner";
import HowToPlaceAnOrder from "../src/components/home/howToPlaceAnOrder/howToPlaceAnOrder";
import ScheduleMeeting from "../src/components/home/scheduleMeeting/scheduleMeeting";
import Testimonial from "../src/components/home/testimonial/testimonial";
import TopServices from "../src/components/home/topServices/topServices";
import WhyChooseVirtualExports from "../src/components/home/whyChooseVirtualExports/whyChooseVirtualExports";

export default function Home({
  topServicesData,
  virtualServicesData,
  bannerData,
  headerInfoVirtualExportsData,
  headerInfoTopServicesData,
  testimonials,
  amazonData,
  placeAnOrderListData,
  placeAnOrderData,
}) {
  console.log(placeAnOrderData);
  return (
    <>
      <Head>
        <title>Virtual Experts | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Banner bannerData={bannerData} />
        <Amazon amazonData={amazonData} />
        <WhyChooseVirtualExports
          virtualServicesData={virtualServicesData}
          headerInfoVirtualExportsData={headerInfoVirtualExportsData}
        />
        <TopServices
          topServicesData={topServicesData}
          headerInfoTopServicesData={headerInfoTopServicesData}
        />
        <Testimonial testimonials={testimonials} />
        <HowToPlaceAnOrder
          placeAnOrderData={placeAnOrderData}
          placeAnOrderListData={placeAnOrderListData}
        />
        <ScheduleMeeting />
      </main>
    </>
  );
}
//top three services fetching
export async function getServerSideProps(context) {
  const resTopServices = await fetch(
    "https://virtual-expert.herokuapp.com/topServices"
  );
  const topServicesData = await resTopServices.json();

  const resHeaderInfoTopServices = await fetch(
    "https://virtual-expert.herokuapp.com/headerInfoTopServices"
  );
  const headerInfoTopServicesData = await resHeaderInfoTopServices.json();

  const resVirtualService = await fetch(
    "https://virtual-expert.herokuapp.com/virtualService"
  );
  const virtualServicesData = await resVirtualService.json();

  const resHeaderInfoVirtualExports = await fetch(
    "https://virtual-expert.herokuapp.com/headerInfoVirtualExports"
  );
  const headerInfoVirtualExportsData = await resHeaderInfoVirtualExports.json();

  const resBanner = await fetch("https://virtual-expert.herokuapp.com/banner");
  const bannerData = await resBanner.json();

  const resTestimonials = await fetch(
    "https://virtual-expert.herokuapp.com/testimonials"
  );
  const testimonials = await resTestimonials.json();

  const resAmazon = await fetch("https://virtual-expert.herokuapp.com/amazon");
  const amazonData = await resAmazon.json();

  const resPlaceAnOrderList = await fetch(
    "https://virtual-expert.herokuapp.com/placeAnOrderList"
  );
  const placeAnOrderListData = await resPlaceAnOrderList.json();

  const resPlaceAnOrder = await fetch(
    "https://virtual-expert.herokuapp.com/placeAnOrder"
  );
  const placeAnOrderData = await resPlaceAnOrder.json();

  return {
    props: {
      topServicesData,
      headerInfoTopServicesData,
      headerInfoVirtualExportsData,
      virtualServicesData,
      bannerData,
      testimonials,
      amazonData,
      placeAnOrderListData,
      placeAnOrderData,
    },
  };
}
