import { BiMenu } from "react-icons/bi";
import { GiCrossedPistols } from "react-icons/gi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminTeam from "../../src/components/dashboard/about.js/team/team";
import AdminTeamSection from "../../src/components/dashboard/about.js/teamSection/teamSection";
import AdminWhoAreVirtualExperts from "../../src/components/dashboard/about.js/whoAreVirtualExperts/whoAreVirtualExperts";
import AdminWhyWeAreUnique from "../../src/components/dashboard/about.js/whyWeAreUnique/whyWeAreUnique";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const About = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <div className="col-12 col-md-10 scroll vh-100">
            <AdminWhoAreVirtualExperts />
            <AdminWhyWeAreUnique />
            <AdminTeamSection />
            <AdminTeam />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
