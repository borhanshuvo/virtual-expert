import { AiFillEdit } from "react-icons/ai";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Dashboard = () => {
  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 container my-4">
          <div className="p-3 boxShadow">
            <div className="d-flex justify-content-between">
              <h6 className="fs-24">About</h6>
              <AiFillEdit size={24} className="text-warning" />
            </div>
            <h6 className="mt-3 fs-18">Title</h6>
            <p classNames="fs-14">Text goes here</p>
            <h6 className="fs-18 mt-3">Subtitle</h6>
            <p className="fs-14">Subtitle goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
