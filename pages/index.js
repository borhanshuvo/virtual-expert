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
  footerLink,
}) {
  return (
    <>
      <Head>
        <title>Virtual Experts | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Banner bannerData={bannerData} footerLink={footerLink} />
        <Amazon amazonData={amazonData} />
        <WhyChooseVirtualExports
          virtualServicesData={virtualServicesData}
          headerInfoVirtualExportsData={headerInfoVirtualExportsData}
        />

        <TopServices
          topServicesData={topServicesData}
          headerInfoTopServicesData={headerInfoTopServicesData}
        />
        <HowToPlaceAnOrder
          placeAnOrderData={placeAnOrderData}
          placeAnOrderListData={placeAnOrderListData}
        />
        <Testimonial testimonials={testimonials} />
        <ScheduleMeeting />
      </main>
    </>
  );
}
//top three services fetching
export async function getServerSideProps(context) {
  const resTopServices = await fetch(
    "http://localhost:8000/topServices"
  );
  const topServicesData = await resTopServices.json();

  const resHeaderInfoTopServices = await fetch(
    "http://localhost:8000/headerInfoTopServices"
  );
  const headerInfoTopServicesData = await resHeaderInfoTopServices.json();

  const resVirtualService = await fetch(
    "http://localhost:8000/virtualService"
  );
  const virtualServicesData = await resVirtualService.json();

  const resHeaderInfoVirtualExports = await fetch(
    "http://localhost:8000/headerInfoVirtualExports"
  );
  const headerInfoVirtualExportsData = await resHeaderInfoVirtualExports.json();

  const resBanner = await fetch(
    "http://localhost:8000/banner"
  );
  const bannerData = await resBanner.json();

  const resTestimonials = await fetch(
    "http://localhost:8000/testimonials"
  );
  const testimonials = await resTestimonials.json();

  const resAmazon = await fetch(
    "http://localhost:8000/amazon"
  );
  const amazonData = await resAmazon.json();

  const resPlaceAnOrderList = await fetch(
    "http://localhost:8000/placeAnOrderList"
  );
  const placeAnOrderListData = await resPlaceAnOrderList.json();

  const resPlaceAnOrder = await fetch(
    "http://localhost:8000/placeAnOrder"
  );
  const placeAnOrderData = await resPlaceAnOrder.json();

  const resFooter = await fetch(
    "http://localhost:8000/footer"
  );
  const footerLink = await resFooter.json();

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
      footerLink,
    },
  };
}
