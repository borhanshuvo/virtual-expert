import Head from "next/head";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";
import { GiCrossedPistols } from "react-icons/gi";
import ReactPaginate from "react-paginate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WithAdminAuth from "../../src/components/adminPrivateRoute";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Orders = ({ orderData, totalData }) => {
  const router = useRouter();

  const totalPage = Math.ceil(totalData / 5);

  const handlePageChange = (page) => {
    router.push(`/admin/complete-orders?page=${page.selected + 1}`);
  };
  return (
    <>
      <Head>
        <title>Virtual Experts | Admin-Orders</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                Total Orders - {totalData}
              </h2>
            </div>
            {/*  */}
            {orderData.map((info, index) => (
              <div key={info._id}>
                <div className="boxShadow p-3 my-3 d-flex justify-content-between align-items-center">
                  <p className="fs-14">
                    <span className="fw-bold">Order Id</span> - {info._id}
                  </p>
                  <small
                    className="cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target={`#order${index + 100}`}
                  >
                    View Details
                  </small>
                </div>

                {/* modal */}
                <div
                  className="modal fade"
                  id={`order${index + 100}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3 className="fs-14">
                          <span className="fw-bold">Order Id</span> - {info._id}
                        </h3>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center">
              <ReactPaginate
                pageCount={totalPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WithAdminAuth(Orders);

export async function getServerSideProps(context) {
  const page = context.query.page;
  const res = await fetch("https://sleepy-mesa-08037.herokuapp.com/order", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ page: page }),
  });
  const ordersData = await res.json();
  const orderData = ordersData.result;
  const totalData = ordersData.totalData;
  return {
    props: {
      orderData,
      totalData,
    },
  };
}

Orders.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
