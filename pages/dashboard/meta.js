import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GiCrossedPistols } from "react-icons/gi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "../../src/components/dashboard/meta/about";
import Blog from "../../src/components/dashboard/meta/blog";
import Home from "../../src/components/dashboard/meta/home";
import LetsTalk from "../../src/components/dashboard/meta/letsTalk";
import Service from "../../src/components/dashboard/meta/service";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Meta = () => {
  const [number, setNumber] = useState(0);
  const [homeData, setHomeData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [serviceData, setServiceData] = useState({});
  const [blogData, setBlogData] = useState({});
  const [letsTalkData, setletsTalkData] = useState({});
  useEffect(() => {
    fetch("https://sleepy-mesa-08037.herokuapp.com/metaHome")
      .then((res) => res.json())
      .then((data) => setHomeData(data[0]));

    fetch("https://sleepy-mesa-08037.herokuapp.com/metaAbout")
      .then((res) => res.json())
      .then((data) => setAboutData(data[0]));

    fetch("https://sleepy-mesa-08037.herokuapp.com/metaService")
      .then((res) => res.json())
      .then((data) => setServiceData(data[0]));

    fetch("https://sleepy-mesa-08037.herokuapp.com/metaBlog")
      .then((res) => res.json())
      .then((data) => setBlogData(data[0]));

    fetch("https://sleepy-mesa-08037.herokuapp.com/metaLetsTalk")
      .then((res) => res.json())
      .then((data) => setletsTalkData(data[0]));
  }, [number]);
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
              data-bs-target="#offcanvasRight2"
              aria-controls="offcanvasRight"
            />
            <div
              className="offcanvas offcanvas-start bg-dark"
              tabIndex="-1"
              id="offcanvasRight2"
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
            <Home setNumber={setNumber} homeData={homeData} />
            <About setNumber={setNumber} aboutData={aboutData} />
            <Service setNumber={setNumber} serviceData={serviceData} />
            <Blog setNumber={setNumber} blogData={blogData} />
            <LetsTalk setNumber={setNumber} letsTalkData={letsTalkData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Meta;
