import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import SectionTitle from "../../sectionTitle/sectionTitle";
import styles from "./topServices.module.css";

const TopServices = ({ topServicesData, headerInfoTopServicesData }) => {
  return (
    <div className="container py-5">
      <div className="py-5">
        <SectionTitle title={headerInfoTopServicesData[0].title} />
        <div className="row">
          {topServicesData.map((service, index) => {
            let imgType;
            if (service.img.contentType === "image/svg+xml") {
              imgType = "data:image/svg+xml";
            } else if (service.img.contentType === "image/png") {
              imgType = "data:image/png";
            } else {
              imgType = "data:image/jpg";
            }
            return (
              <div
                key={service._id}
                className={`${styles.serviceCard} col-12 col-md-4 p-4  mt-md-5`}
              >
                <div className="d-flex justify-content-center">
                  <Image
                    src={`${imgType} ; base64, ${service.img.img}`}
                    alt="Loading..."
                    height="150"
                    width="150"
                  />
                </div>
                <h6 className="text-center mt-5">{service.title}</h6>
                <p className="text-center fs-15 mt-3 text-color ">
                  {service.description}
                </p>
                <p className="text-center order-color">
                  Order <RiArrowRightSLine />
                </p>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="button"
            style={{ backgroundColor: "white", padding: "5px 20px" }}
          >
            <h6 className="d-inline">View all Amazon Services</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
