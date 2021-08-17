import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/Io';
import styles from './about.module.css';
import about1 from '../../../images/about/img-1.svg';
import about2 from '../../../images/about/Img.svg';
const AboutC = () => {
  return (
    <section>
      <div
        className={`${styles.top} d-flex justify-content-between align-items-center`}
      >
        <div className="container">
          <div className=" d-md-flex justify-content-between align-items-center">
            <h6 className="text-dark fs-30">Let’s Talk</h6>
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
            <h6>Who are Virtual Experts?</h6>
            <p className="text-muted">
              Virtual Experts is a well-known USA-based Digital Marketing
              Agency. Who works to promote your Amazon products/brands and
              improves your product brand value Online. Virtual Experts Ltd. has
              more than 6 Years of experience at this service. We have more than
              50 employees and they are qualified enough. If you want to improve
              your product sales and branding, then you can check our services
              here. We are always here to help you guys.
            </p>
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
                Why We are Unique?
              </h6>
              <div>
                <p className="mb-5">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    01
                  </span>{' '}
                  Our work is 100% compatible with the Amazon A10 algorithm. So,
                  it is safe.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    02
                  </span>{' '}
                  We will give you 100% Privacy & Protection by never sharing
                  your identity with anyone else.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    03
                  </span>{' '}
                  We always use 100% Verified Amazon Accounts with real
                  addresses & purchases history.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    04
                  </span>{' '}
                  We have 50+ different computers with Different MAC & IP
                  addresses.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    05
                  </span>{' '}
                  We have 50+ Real Employee who has enough expertise and
                  capability to work perfectly.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    06
                  </span>{' '}
                  We are always up to date with Amazon Terms & Conditions.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    07
                  </span>{' '}
                  We use PayPal, Payoneer, Skrill & Bitcoin for a smooth
                  transaction.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    08
                  </span>{' '}
                  We have the option of half-payment for new clients.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    09
                  </span>{' '}
                  We always Exchange Browsers & Delete Cookies. So, there is NO
                  Risk of Cookies.
                </p>
                <p className="mb-5 fs-15">
                  {' '}
                  <span className={`${styles.number} fw-bold text-dark`}>
                    10
                  </span>{' '}
                  Free advice & 24/7 customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}

      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h6 className="fs-24">Meet The Team</h6>
            <p className="text-muted fs-15">
              Virtual Experts has around 7 years of experience in Amazon
              FBA/Kindle business model and Digital Marketing consultancy. We
              also sell products on Amazon besides being a marketing agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutC;
