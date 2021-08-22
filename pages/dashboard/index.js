import { BiMenu } from "react-icons/bi";
import { GiCrossedPistols } from "react-icons/gi";
import AdminAmazon from "../../src/components/dashboard/amazon/amazon";
import AdminBanner from "../../src/components/dashboard/banner.js/banner";
import AdminFooter from "../../src/components/dashboard/footer/footer";
import AdminHowToPlaceAnOrder from "../../src/components/dashboard/howToPlaceAnOrder/howToPlaceAnOrder";
import ScheduleMeeting from "../../src/components/dashboard/scheduleMeeting/scheduleMeeting";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";
import AdminTestimonials from "../../src/components/dashboard/testimonials/testimonials";
import AdminTopThreeService from "../../src/components/dashboard/topThreeService/topThreeService";
import AdminWhyChooseVirtualExperts from "../../src/components/dashboard/whyChooseVirtualExperts/whyChooseVirtualExperts";

const Dashboard = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-12 col-md-2 d-none d-md-block">
          <Sidebar />
        </div>
        <div className="d-md-none col-12 mt-2 me-2">
          <BiMenu
            size={32}
            className="ms-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          />
          <div
            className="offcanvas offcanvas-start bg-dark"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <GiCrossedPistols
                size={32}
                className="text-reset d-block ms-auto mt-2"
                style={{ color: "#fff!important" }}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 py-4 vh-100 scroll">
          <AdminBanner />
          <AdminAmazon />
          <AdminWhyChooseVirtualExperts />
          <AdminTopThreeService />
          <AdminHowToPlaceAnOrder />
          <AdminTestimonials />
          <ScheduleMeeting />
          <AdminFooter />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
