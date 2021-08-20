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
  return (
    <section>
      <div
        className={`${styles.top} d-flex justify-content-between align-items-center`}
      >
        <div className="container">
          <div className=" d-md-flex justify-content-between align-items-center">
            <h6 className="text-dark fs-30">About Us</h6>
            <div className="d-flex align-items-center ">
              <p className="fs-14">Home</p>{' '}
              <p>
                <IoIosArrowForward className={`${styles.logo}`} />
              </p>{' '}
              <p className="fs-14">About</p>{' '}
            </div>
          </div>
        </div>
      </div>

      {/* ================================= */}

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6">
            <h6 className={`${styles.title} fs-28`}>{aboutData?.title}</h6>
            <p className="text-muted fs-15 lh-lg">{aboutData?.discription}</p>
          </div>
          <div className="col-md-6 text-center">
            <Image src={about1} alt="image" />
          </div>
        </div>
      </div>

      {/* ================================= */}

      <div className="background-color-skyblue my-5 py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <Image src={about2} alt="image.svg" />
            </div>
            <div className="col-md-6 text-muted">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}

      <div className="container ">
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-50 text-center  mt-5 pt-3">
            <h6 className={`${styles.title1} fs-24 `}>
              {aboutTeamData?.title}
            </h6>
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

      <div className="container p-5 my-3 w-md-75 w-100">
        <div className="d-flex justify-content-center align-items-center background-color-skyblue py-5">
          <div className="w-75 text-center py-2">
            <h6 className={`fs-24`}>
              Our professional team has helped{' '}
              <span style={{ color: '#FE9332' }}>5,000+</span> Amazon sellers to
              gain potential sales
            </h6>
            <button type="submit" className="button mt-3">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutC;
