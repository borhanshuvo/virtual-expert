<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/Io';
import styles from './about.module.css';
import about1 from '../../../images/about/img-1.svg';
import about2 from '../../../images/about/Img.svg';
import model from '../../../images/isa.jpg';
const AboutC = ({
  aboutData,
  aboutTeamData,
  aboutUniquetData,
  aboutUniquetListData,
}) => {
=======
import Image from "next/image";
import React from "react";
import about1 from "../../../images/about/img-1.svg";
import about2 from "../../../images/about/Img.svg";
import model from "../../../images/isa.jpg";
import ScheduleMeeting from "../home/scheduleMeeting/scheduleMeeting";
import styles from "./about.module.css";

const AboutC = () => {
>>>>>>> ebc29d1bf7f1cf916d62249309e79825a767a1c1
  return (
    <section className="overflow-hidden">

        <div className="background-color-skyblue">
          <div className="container d-md-flex justify-content-between align-items-center py-5">
            <h6 className="fs-30">About</h6>
            <p className="fs-14">
              Home <span className="text-warning mx-2">{`>`}</span> About
            </p>
          </div>
        </div>

      {/* ================================= */}

<<<<<<< HEAD
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6">
            <h6 className={`${styles.title} fs-28`}>{aboutData?.title}</h6>
            <p className="text-muted fs-15 lh-lg">{aboutData?.discription}</p>
=======
      <div className="container">
        <div className="row py-5 align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h6 className={`${styles.title} fs-28 mt-5`}>
              Who are Virtual Experts?
            </h6>
            <p className="text-muted fs-15 lh-lg">
              Virtual Experts is a well-known USA-based Digital Marketing
              Agency. Who works to promote your Amazon products/brands and
              improves your product brand value Online. Virtual Experts Ltd. has
              more than 6 Years of experience at this service. We have more than
              50 employees and they are qualified enough. If you want to improve
              your product sales and branding, then you can check our services
              here. We are always here to help you guys.
            </p>
>>>>>>> ebc29d1bf7f1cf916d62249309e79825a767a1c1
          </div>
          <div className="col-md-6 text-center order-1 order-md-2 px-4">
            <Image src={about1} alt="image" />
          </div>
        </div>
      </div>

      {/* ================================= */}

      <div className="background-color-skyblue py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <Image src={about2} alt="image.svg" />
            </div>
            <div className="col-md-6 text-muted">
<<<<<<< HEAD
              <h6 className={`${styles.title} text-dark fs-24`}>
                {aboutUniquetData.title}
              </h6>
              <div>
                {aboutUniquetListData.map((item, index) => (
                  <div key={item._id} className="d-flex fs-14 mt-4">
                    <span className="me-2 numberBefore fw-bold text-dark">
                      {index + 1 > 9 ? index + 1 : ` 0${index + 1}`}
                    </span>
                    <p>{item.title}</p>
                  </div>
                ))}
=======
              <h6 className={`${styles.title} text-dark fs-24 mt-5`}>
                Why We are Unique?
              </h6>
              <div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    01
                  </span>
                  <p>
                    Our work is 100% compatible with the Amazon A10 algorithm.
                    So, it is safe.
                  </p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    02
                  </span>
                  <p>
                    We will give you 100% Privacy & Protection by never sharing
                    your identity with anyone else.
                  </p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    03
                  </span>
                  <p>
                    We always use 100% Verified Amazon Accounts with real
                    addresses & purchases history.
                  </p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    04
                  </span>
                  <p>
                    We have 50+ different computers with Different MAC & IP
                    addresses.
                  </p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    05
                  </span>
                  <p>
                    We have 50+ Real Employee who has enough expertise and
                    capability to work perfectly.
                  </p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    06
                  </span>
                  <p>
                    We are always up to date with Amazon Terms & Conditions.
                  </p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    07
                  </span>
                  <p>
                    We use PayPal, Payoneer, Skrill & Bitcoin for a smooth
                    transaction.
                  </p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    08
                  </span>
                  <p>We have the option of half-payment for new clients.</p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    09
                  </span>
                  <p>We always Exchange Browsers & Delete Cookies.</p>
                </div>
                <div className="d-flex fs-14 mt-3">
                  <span className="me-2 numberBefore fw-bold text-dark">
                    10
                  </span>
                  <p>
                    So, there is NO Risk of Cookies. Free advice & 24/7 customer
                    support.
                  </p>
                </div>
>>>>>>> ebc29d1bf7f1cf916d62249309e79825a767a1c1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}

      <div className="container ">
        <div className="d-flex justify-content-center align-items-center">
<<<<<<< HEAD
          <div className="w-50 text-center  mt-5 pt-3">
            <h6 className={`${styles.title1} fs-24 `}>
              {aboutTeamData?.title}
            </h6>
=======
          <div className="col-12 col-md-7 mx-auto text-center  mt-5 pt-3">
            <h6 className={`${styles.title1} fs-24 `}>Meet The Team</h6>
>>>>>>> ebc29d1bf7f1cf916d62249309e79825a767a1c1
            <p className="text-muted fs-15 mt-3 mb-5 lh-lg">
              {aboutTeamData?.discription}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center ">
            <Image src={model} alt="isabaleIsCute" />
            <div className={`${styles.name} mt-4`}>
              <h6 className="fs-18">Richard</h6>
              <p className="fs-15">Founder & CEO</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <Image src={model} alt="isabaleIsCute" />
            <div className={`${styles.name} mt-4`}>
              <h6 className="fs-18">Richard</h6>
              <p className="fs-15">Founder & CEO</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <Image src={model} alt="isabaleIsCute" />
            <div className={`${styles.name} mt-4`}>
              <h6 className="fs-18">Richard</h6>
              <p className="fs-15">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      {/* ============================ */}
      <ScheduleMeeting />
    </section>
  );
};

export default AboutC;
