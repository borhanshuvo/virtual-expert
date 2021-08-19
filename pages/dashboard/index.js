import AdminAmazon from "../../src/components/dashboard/amazon/amazon";
import AdminBanner from "../../src/components/dashboard/banner.js/banner";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";
import AdminTopThreeService from "../../src/components/dashboard/topThreeService/topThreeService";
import AdminWhyChooseVirtualExperts from "../../src/components/dashboard/whyChooseVirtualExperts/whyChooseVirtualExperts";

const Dashboard = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 py-4 vh-100 scroll">
          <AdminBanner />
          <AdminAmazon />
          <AdminWhyChooseVirtualExperts />
          <AdminTopThreeService />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
