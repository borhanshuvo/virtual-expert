import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminAddServices from "../../src/components/dashboard/service/adminAddServices/adminAddServices";
import AdminServiceBanner from "../../src/components/dashboard/service/adminServiceBanner/adminServiceBanner";
import AdminServiceCard from "../../src/components/dashboard/service/adminServiceCard/adminServiceCard";
import ServiceCardHeader from "../../src/components/dashboard/service/serviceCardHeader/serviceCardHeader";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Service = () => {
  const [serviceBanner, setServiceBanner] = useState({});
  const [servicesCardData, setServicesCardData] = useState([]);
  const [serviceCardHeader, setServiceCardHeader] = useState({});
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/whatWeDo")
      .then((res) => res.json())
      .then((data) => setServiceBanner(data));

    fetch("http://localhost:8000/servicesCard")
      .then((res) => res.json())
      .then((data) => setServicesCardData(data));

    fetch("http://localhost:8000/serviceCardHeader")
      .then((res) => res.json())
      .then((data) => setServiceCardHeader(data));
  }, [number]);

  return (
    <section className="overflow-hidden">
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
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 container pt-5 vh-100 scroll">
          <div className="p-3 boxShadow me-4 mb-5">
            <AdminServiceBanner
              serviceBanner={serviceBanner}
              setNumber={setNumber}
            />
          </div>

          <div className="p-3 boxShadow me-4 mb-5">
            <ServiceCardHeader
              serviceCardHeader={serviceCardHeader}
              setNumber={setNumber}
            />
          </div>

          <div className="p-3 boxShadow me-4 mb-5">
            <AdminAddServices setNumber={setNumber} />
            <div className="row">
              {servicesCardData.map((servicesCard, index) => {
                let imgType;
                if (servicesCard.img.contentType === "image/svg+xml") {
                  imgType = "data:image/svg+xml";
                } else if (servicesCard.img.contentType === "image/png") {
                  imgType = "data:image/png";
                } else {
                  imgType = "data:image/jpg";
                }
                return (
                  <AdminServiceCard
                    key={servicesCard._id}
                    servicesCard={servicesCard}
                    imgType={imgType}
                    index={index}
                    servicesCardData={servicesCardData}
                    setServicesCardData={setServicesCardData}
                    setNumber={setNumber}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

Service.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
