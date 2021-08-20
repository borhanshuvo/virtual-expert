import { BiMenu } from "react-icons/bi";
import { GiCrossedPistols } from "react-icons/gi";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const LetsTalk = () => {
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
        <div className="col-12 col-md-10">Hello this is LetsTalk section</div>
      </div>
    </section>
  );
};

export default LetsTalk;

LetsTalk.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
