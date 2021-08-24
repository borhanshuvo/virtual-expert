import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import SectionTitle from "../../sectionTitle/sectionTitle";
import styles from "./topServices.module.css";

const TopServices = ({ topServicesData, headerInfoTopServicesData }) => {
  return (
    <div className="container py-5">
      <div className="py-5">
        <SectionTitle
          title={headerInfoTopServicesData[0].title}
          isBgWhite={true}
        />
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
                <h2 className="text-center mt-5 font-family-roboto fs-18">
                  {service.title}
                </h2>
                <p className="text-center fs-15 mt-3 text-color ">
                  {service.description}
                </p>
                <Link href="/order">
                  <a className="text-center order-color d-block buttonLink px-3">
                    Order <RiArrowRightSLine />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <Link href="/services">
            <a className="button py-1 px-3">
              <h4 className="d-inline font-family-roboto fs-14">
                View all Amazon Services
              </h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
