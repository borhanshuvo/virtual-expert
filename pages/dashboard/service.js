import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Service = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">Hello this is service section</div>
      </div>
    </section>
  );
};

export default Service;

Service.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
