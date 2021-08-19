import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Dashboard = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-9">nested page goes here</div>
      </div>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
