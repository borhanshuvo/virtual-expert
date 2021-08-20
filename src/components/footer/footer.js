import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiFillInstagram } from 'react-icons/Ai';
import { FaFacebook, FaSkype, FaTelegram } from 'react-icons/Fa';
import { ImTwitter } from 'react-icons/Im';
import { IoLogoWhatsapp } from 'react-icons/Io';
import { MdEmail } from 'react-icons/Md';
import Logo from '../../../images/Logo.svg';
import BTC from '../../../images/Others/Bitcoin.svg';
import Payoneer from '../../../images/Others/Payoneer.svg';
import PayPal from '../../../images/Others/PayPal.svg';
import skrill from '../../../images/Others/Skrill.svg';
import styles from './footer.module.css';

const Footer = () => {
  const [footer, setFooter] = useState(null);
  console.log(footer, 'footer');
  // const { email, description, skype, whatsApp } = footer;
  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch('http://localhost:8000/footer/');
      const data = await response.json();
      setFooter(data[0]);
    }

    fetchAPI();
  }, []);

  return (
    <section className={`${styles.main}`}>
      <div className={`container py-3`}>
        <div className={`${styles.bottom} row p-2 p-md-5`}>
          <div className="col-md-4">
            <Image src={Logo} alt="logo" />
            <p className="text-muted text-center text-md-start">
              {footer?.description}
            </p>
          </div>
          <div className="col-md-4 px-5">
            <div className="text-center text-md-start">
              <h6 className={`${styles.title} fs-16`}>Get in Touch</h6>
            </div>
            <p className="mt-3 text-muted">
              {' '}
              <MdEmail className={`${styles.logo}`} />
              Email: {footer?.email}
            </p>
            <p className=" text-muted">
              {' '}
              <FaSkype className={`${styles.logo}`} />
              Skype: {footer?.skype}
            </p>
            <p className=" text-muted">
              {' '}
              <IoLogoWhatsapp className={`${styles.logo}`} />
              Whatsapp: {footer?.whatsApp}
            </p>
          </div>
          <div className="col-md-4 text-center text-md-start">
            <h6 className={styles.title}>Let’s Get Social</h6>
            <div className="d-flex align-items-center my-4 justify-content-center justify-content-md-start">
              <FaFacebook className={`${styles.logo} me-3`} />
              <AiFillInstagram className={`${styles.logo} mx-3`} />
              <FaTelegram className={`${styles.logo} mx-3`} />
              <ImTwitter className={`${styles.logo} mx-3`} />
            </div>
            <h6 className={`${styles.title}`}>Payment method</h6>
            <div className="d-flex align-items-center mt-2 justify-content-center justify-content-md-start">
              <div className="me-2 my-3">
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
        <footer className="text-center  text-muted">
          <p className="mt-2 text-muted">
            © 2021 Virtual Experts. All Right Reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
