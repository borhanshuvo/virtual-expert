import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Logo from '../../../images/Logo.svg';
import PayPal from '../../../images/Others/PayPal.svg';
import Payoneer from '../../../images/Others/Payoneer.svg';
import skrill from '../../../images/Others/Skrill.svg';
import BTC from '../../../images/Others/Bitcoin.svg';
import { MdEmail } from 'react-icons/Md';
import { FaSkype, FaFacebook, FaTelegram } from 'react-icons/Fa';
import { IoLogoWhatsapp } from 'react-icons/Io';
import { AiFillInstagram } from 'react-icons/Ai';
import { ImTwitter } from 'react-icons/Im';

const Footer = () => {
  return (
    <section className={`${styles.main}`}>
      <div className={`container py-3`}>
        <div className={`${styles.bottom} d-flex  justify-content-evenly p-5`}>
          <div className="col-md-4">
            <Image src={Logo} alt="logo" />
            <p className="text-muted">
              Virtual Experts is a real Amazon FBA/Kindle Book & Digital
              Marketer with 7 years of experience, who can help you to improve
              your sales significantly.
            </p>
          </div>
          <div className={`col-md-4 mx-5 px-5`}>
            <h6>Get in Touch</h6>
            <p>
              {' '}
              <MdEmail className={`${styles.logo}`} />
              Email: help@gmail.com
            </p>
            <p>
              {' '}
              <FaSkype className={`${styles.logo}`} />
              Skype: +014578218
            </p>
            <p>
              {' '}
              <IoLogoWhatsapp className={`${styles.logo}`} />
              Email: +014578218
            </p>
          </div>
          <div className="col-md-4">
            <h6>Let’s Get Social</h6>
            <div className="d-flex align-items-center my-3 ">
              <FaFacebook className={`${styles.logo} mx-3`} />
              <AiFillInstagram className={`${styles.logo} mx-3`} />
              <FaTelegram className={`${styles.logo} mx-3`} />
              <ImTwitter className={`${styles.logo} mx-3`} />
            </div>
            <h6 className={`${styles.title}`}>Payment method</h6>
            <div className="d-flex align-items-center px-2 ">
              <div className="mx-2 my-3">
                <Image src={PayPal} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={Payoneer} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={skrill} alt="logo" />
              </div>
              <div className="mx-2">
                <Image src={BTC} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center py-4 text-muted">
          <h6 className="mt-2 text-muted">
            © 2021 Virtual Experts. All Right Reserved.
          </h6>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
