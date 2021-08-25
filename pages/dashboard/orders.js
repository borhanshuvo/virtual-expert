import { BiMenu } from "react-icons/bi";
import { GiCrossedPistols } from "react-icons/gi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WithAdminAuth from "../../src/components/adminPrivateRoute";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Orders = ({ orders }) => {
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
          <div className="d-block d-md-none col-12 mt-2 me-2">
            <BiMenu
              size={32}
              className="ms-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight1"
              aria-controls="offcanvasRight"
            />
            <div
              className="offcanvas offcanvas-start bg-dark"
              tabIndex="-1"
              id="offcanvasRight1"
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
            {/*  */}
            <div className="p-3 boxShadow">
              <h2 className="fs-18 roboto-font-family">
                Total Orders - {orders.length}
              </h2>
            </div>
            {/*  */}
            {orders.map((info) => (
              <div className="boxShadow p-3 my-3" key={info._id}>
                <p className="fs-14">
                  <span className="fw-bold">Order Id</span> - {info._id}
                </p>
                <p className="fs-14">
                  {" "}
                  <span className="fw-bold">Name : </span> {info.name}
                </p>
                <p className="fs-14">
                  <span className="fw-bold">Email : </span> {info.email}
                </p>
                <p className="fs-14">
                  <span className="fw-bold">ProductLink/ASIN : </span>{" "}
                  {info.productLinkOrASIN}
                </p>
                <p className="fs-14 fw-bold">Selected Services</p>
                {info.selectedServices.map((service, index) => (
                  <p key={service} className="fs-14">
                    {index + 1} . {service}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WithAdminAuth(Orders);

export async function getServerSideProps() {
  const res = await fetch("https://sleepy-mesa-08037.herokuapp.com/order");
  const orders = await res.json();

  return {
    props: {
      orders,
    },
  };
}

Orders.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
