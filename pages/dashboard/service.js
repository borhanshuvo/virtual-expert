import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import Sidebar from "../../src/components/dashboard/sidebar/sidebar";

const Service = ({ whatWeDo }) => {
  const [serviceBanner, setServiceBanner] = useState({});
  const [servicesCardData, setServicesCardData] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/whatWeDo")
      .then((res) => res.json())
      .then((data) => setServiceBanner(data));

    fetch("https://virtual-expert.herokuapp.com/servicesCard")
      .then((res) => res.json())
      .then((data) => setServicesCardData(data));
  }, [number]);

  return (
    <section className="overflow-hidden">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 container pt-5 vh-100 scroll">
          <div className="p-3 boxShadow me-4 mb-5">
            <div className="d-flex justify-content-between">
              <h6 className="fs-24">Service Banner</h6>
              <AiFillEdit size={24} className="text-warning" />
            </div>
            <h6 className="mt-3 fs-18">Title</h6>
            <p classNames="fs-14">{serviceBanner.title}</p>
            <h6 className="fs-18 mt-3">Description</h6>
            <p classNames="fs-14">{serviceBanner.description}</p>
            <h6 className="fs-18 mt-3">SubDescription</h6>
            <p classNames="fs-14">{serviceBanner.subDescription}</p>
          </div>

          <div className="p-3 boxShadow me-4 mb-5">
            <div className="d-flex justify-content-between">
              <h6 className="fs-24">Service Card</h6>
              <AiFillEdit size={24} className="text-warning" />
            </div>
            <div className="row">
              {servicesCardData.map((servicesCard) => (
                <div className="col-md-4 pb-3" key={servicesCard._id}>
                  {/* <Image
                    src={servicesCard.img}
                    alt={servicesCard.img}
                    width={200}
                    height={200}
                  /> */}
                  <div
                    className="bg-white p-3 borderRadius"
                    style={{ height: "300px" }}
                  >
                    <h6 className="fs-18">{servicesCard.title}</h6>
                    <h6 className="fs-14 mt-2">{servicesCard.subTitle}</h6>
                    {servicesCard.regularReview && (
                      <p className="fs-14">
                        Regular Review : ${servicesCard.regularReview} each
                      </p>
                    )}
                    {servicesCard.videoReview && (
                      <p className="fs-14">
                        Video Review : ${servicesCard.videoReview} each
                      </p>
                    )}
                    {servicesCard.top50Reviewers && (
                      <p className="fs-14">
                        Top 50 Reviewers : ${servicesCard.top50Reviewers} each
                      </p>
                    )}
                    {servicesCard.price && (
                      <p className="fs-14">Price : {servicesCard.price}</p>
                    )}
                    {servicesCard.delivery && (
                      <p className="fs-14">
                        Delivery : {servicesCard.delivery} days
                      </p>
                    )}
                    {servicesCard.warranty && (
                      <p className="fs-14">
                        Warranty : {servicesCard.warranty} days free maintenence
                      </p>
                    )}
                    {servicesCard.maintenence && (
                      <p className="fs-14">
                        Maintenence : ${servicesCard.maintenence} per month
                      </p>
                    )}
                    <button
                      className="button"
                      style={{ padding: "5px 20px", backgroundColor: "white" }}
                    >
                      <h6 className="fs-14 d-inline">Order Now</h6>
                    </button>
                  </div>
                </div>
              ))}
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
