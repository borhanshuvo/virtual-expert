import React from 'react';
import styles from './letsTalk.module.css';
import { IoIosArrowForward } from 'react-icons/Io';
import { GoLocation } from 'react-icons/Go';
import { HiOutlineMail } from 'react-icons/Hi';
import { AiOutlineSkype, AiOutlineWhatsApp } from 'react-icons/Ai';
import Logo from '../../../images/Logo.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const LetsTalk = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));
  return (
    <section className={styles.main}>
      <div
        className={`${styles.top} d-flex justify-content-between align-items-center`}
      >
        <div className="container">
          <div className="  d-md-flex justify-content-between align-items-center">
            <h6>Let’s Talk</h6>
            <div className="d-flex align-items-center">
              <p>Home</p>{' '}
              <p>
                <IoIosArrowForward className={`${styles.logo}`} />
              </p>{' '}
              <p>Let’s Talk</p>{' '}
            </div>
          </div>
        </div>
      </div>
      {/* //form part */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <Image src={Logo} alt="logo" />
            </div>
            <h6 className={styles.title}>Amazon Growth & Results.</h6>
            <p className="text-muted my-4">
              Do you have any questions related to Amazon FBA/Kindle & Digital
              Marketing? Feel free to contact us. For better response use
              Skype/WhatsApp.
            </p>
            <div className="text-muted mb-5">
              <p>
                {' '}
                <GoLocation className={`${styles.logo}`} />
                <span className="fw-bold">Address</span>: 226 West 26th Street,
                New York, NY 10001, USA
              </p>
              <p>
                {' '}
                <HiOutlineMail className={`${styles.logo}`} />
                <span className="fw-bold">Email</span>: help@virtualexperts.net
              </p>
              <p>
                {' '}
                <AiOutlineSkype className={`${styles.logo}`} />
                <span className="fw-bold">Skype</span>: VirtualExpertsLTD
              </p>
              <p>
                {' '}
                <AiOutlineWhatsApp className={`${styles.logo}`} />
                <span className="fw-bold">Whatsapp</span>: +13473528622
              </p>
            </div>
            <div>
              <h6 className={styles.title}>Connect with us</h6>
              <div className="d-flex mt-2">
                <GoLocation className={`${styles.logoBottom}`} />
                <HiOutlineMail className={`${styles.logoBottom}`} />
                <AiOutlineSkype className={`${styles.logoBottom}`} />
                <AiOutlineWhatsApp className={`${styles.logoBottom}`} />
              </div>
            </div>
          </div>

          {/* form starts here ======================== form starts here */}

          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-md-flex gap-4 mt-5 mb-md-5 mb-sm-2 justify-content-center">
                <input
                  placeholder="Name"
                  {...register('example')}
                  className={`${styles.input} form-control mb-4 mb-md-0 `}
                />
                <input
                  placeholder="Email"
                  {...register('example')}
                  className={`${styles.input} form-control`}
                />
              </div>
              <div className="d-md-flex gap-4 mt-4 mb-5 justify-content-center">
                <input
                  placeholder="Phone"
                  {...register('example')}
                  className={`${styles.input} form-control mb-4 mb-md-0`}
                />
                <input
                  placeholder="Subject"
                  {...register('example')}
                  className={`${styles.input} form-control`}
                />
              </div>
              <div className="mt-5 mb-5 ">
                <textarea
                  className={`${styles.input} form-control w-100`}
                  id="w3review"
                  name="w3review"
                  rows="6"
                  cols="50"
                  placeholder="Massage"
                ></textarea>
              </div>

              <input
                className={`${styles.button}`}
                type="submit"
                value="send"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
