import Image from 'next/image';
import React from 'react';
import about1 from '../../../images/about/img-1.svg';
import about2 from '../../../images/about/Img.svg';
import model from '../../../images/isa.jpg';
import ScheduleMeeting from '../home/scheduleMeeting/scheduleMeeting';
import styles from './about.module.css';

const AboutC = ({
  aboutData,
  aboutTeamData,
  aboutUniquetData,
  aboutUniquetListData,
}) => {
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

      <div className="container my-5">
        <div className="row py-5">
          <div className="col-md-6">
            <h6 className={`${styles.title} fs-28`}>{aboutData?.title}</h6>
            <p className="text-muted fs-15 lh-lg">{aboutData?.discription}</p>
          </div>
          <div className="col-md-6 text-center order-1 order-md-2 px-4">
            <Image src={about1} alt="image" />
          </div>
        </div>
      </div>

      {/* ================================= */}

      <div className="background-color-skyblue py-5">
        <div className="container my-5">
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
                  <div key={item._id} className="d-flex fs-14 mt-2">
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

      <div className="container my-5">
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
      <ScheduleMeeting />
    </section>
  );
};

export default AboutC;
