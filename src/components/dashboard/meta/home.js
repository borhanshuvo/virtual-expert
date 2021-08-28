import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <>
      <section className="my-2 boxShadow me-3 p-3">
        <div className="d-flex justify-content-between">
          <h1 className="fs-24">main tittle</h1>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer "
            data-bs-toggle="modal"
            data-bs-target="#homeModal"
          />
        </div>
        <h6 className="fs-18 mt-2">Title</h6>
        <p className="fs-14">tittle</p>
        <h6 className="fs-18 mt-2">Sub Title</h6>
        <p className="fs-14">subtittle</p>
      </section>
      {/* =============== modal */}

      <div
        className="modal fade"
        id="homeModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Meta Tag For Home
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Meta Title</label>
                <textarea
                  rows="2"
                  cols="2"
                  {...register('title')}
                  name="title"
                  id="title"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="title">Meta description</label>
                <textarea
                  rows="2"
                  cols="2"
                  {...register('description')}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>

                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Save Changes"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
