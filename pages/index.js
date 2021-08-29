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
  metaHome,
}) {
  return (
    <>
      <Head>
        <title>
          {metaHome.title
            ? `Virtual Experts |  ${metaHome.title}`
            : "virtual Experts | Home"}
        </title>
        {/* <title>Virtual Experts | Home</title> */}
        <meta
          name="description"
          content={
            metaHome.description
              ? ` ${metaHome.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content="Amazon Marketing Service,
        amazon ppc,
        amazon seller feedback,
        amazon marketing strategy ,
        amazon product review,
        amazon fba consultant,
        amazon seo agency,
        worst amazon reviews,
        amazon seo consultant,
        amazon seo services,
        amazon bad reviews,
        amazon negative review removal,
        listing optimization services"
        />
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
    "https://sleepy-mesa-08037.herokuapp.com/topServices"
  );
  const topServicesData = await resTopServices.json();

  const resHeaderInfoTopServices = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/headerInfoTopServices"
  );
  const headerInfoTopServicesData = await resHeaderInfoTopServices.json();

  const resVirtualService = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/virtualService"
  );
  const virtualServicesData = await resVirtualService.json();

  const resHeaderInfoVirtualExports = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/headerInfoVirtualExports"
  );
  const headerInfoVirtualExportsData = await resHeaderInfoVirtualExports.json();

  const resBanner = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/banner"
  );
  const bannerData = await resBanner.json();

  const resTestimonials = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/testimonials"
  );
  const testimonials = await resTestimonials.json();

  const resAmazon = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/amazon"
  );
  const amazonData = await resAmazon.json();

  const resPlaceAnOrderList = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/placeAnOrderList"
  );
  const placeAnOrderListData = await resPlaceAnOrderList.json();

  const resPlaceAnOrder = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/placeAnOrder"
  );
  const placeAnOrderData = await resPlaceAnOrder.json();

  const resFooter = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/footer"
  );
  const footerLink = await resFooter.json();

  const resMetaHome = await fetch(
    "https://sleepy-mesa-08037.herokuapp.com/metaHome"
  );
  const metaHome = await resMetaHome.json();

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
      metaHome: metaHome[0],
    },
  };
}
