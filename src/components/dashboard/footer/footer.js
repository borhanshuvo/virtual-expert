import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const AdminFooter = () => {
  const [footerData, setFooterData] = useState({});
  const [footerLink, setFooterLink] = useState({});
  const [number, setNumber] = useState(0);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("https://virtual-expert.herokuapp.com/footer")
      .then((res) => res.json())
      .then((data) => setFooterData(data[0]));

    fetch("https://virtual-expert.herokuapp.com/footerLink")
      .then((res) => res.json())
      .then((data) => setFooterLink(data[0]));
  }, [number]);

  const handleUpdateFooterInfo = (data) => {
    const description = data.description || footerData.description;
    const email = data.email || footerData.email;
    const skype = data.skype || footerData.skype;
    const whatsApp = data.whatsApp || footerData.whatsApp;
    const _id = footerData._id;

    fetch("https://virtual-expert.herokuapp.com/footer/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ description, email, skype, whatsApp, _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNumber(number + 1);
      });
  };

  const handleUpdateFooterLink = (data) => {
    const _id = footerLink._id;
    const facebook = data.facebook || footerLink.facebook;
    const instagram = data.instagram || footerLink.instagram;
    const telegram = data.telegram || footerLink.telegram;
    const twitter = data.twitter || footerLink.twitter;

    fetch("https://virtual-expert.herokuapp.com/footerLink/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id, facebook, instagram, telegram, twitter }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNumber(number + 1);
      });
  };

  return (
    <>
      <div className="p-3 boxShadow me-3 my-2">
        <div className="d-flex justify-content-between">
          <h6 className="fs-24">Edit Footer Here</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#footerPart1"
          />
        </div>
        <h6 className="mt-3 fs-18">Footer Description</h6>
        <p className="fs-14">{footerData.description}</p>
        <h6 className="fs-18 mt-3">Contact Info</h6>
        <label htmlFor="email" className="d-block my-2">
          Email
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="email"
          value={footerData.email}
        />
        <label htmlFor="skype" className="d-block my-2">
          Skype
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="skype"
          value={footerData.skype}
        />
        <label htmlFor="whatsApp" className="d-block my-2">
          WhatsApp
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="whatsApp"
          value={footerData.whatsApp}
        />
        <div className="d-flex justify-content-between my-4">
          <h6 className="fs-18">Update Social Link</h6>
          <AiFillEdit
            size={24}
            className="text-warning cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#footerPart2"
          />
        </div>
        <label htmlFor="facebook" className="d-block my-2">
          Facebook
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="facebook"
          value={footerLink.facebook}
        />
        <label htmlFor="instagram" className="d-block my-2">
          Instagram
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="instagram"
          value={footerLink.instagram}
        />
        <label htmlFor="telegram" className="d-block my-2">
          Telegram
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="telegram"
          value={footerLink.telegram}
        />
        <label htmlFor="twitter" className="d-block my-2">
          Twitter
        </label>
        <input
          type="text"
          className="form-control fs-14"
          name="twitter"
          value={footerLink.twitter}
        />
      </div>

      {/* modal 1 start here */}
      <div
        className="modal fade"
        id="footerPart1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Footer Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateFooterInfo)}>
                <label htmlFor="description">Description</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.description}
                  {...register("description")}
                  name="description"
                  id="description"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="email">Email</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.email}
                  {...register("email")}
                  name="email"
                  id="email"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="skype">Skype</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.skype}
                  {...register("skype")}
                  name="skype"
                  id="skype"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="whatsApp">WhatsApp</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerData.whatsApp}
                  {...register("whatsApp")}
                  name="whatsApp"
                  id="whatsApp"
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

      {/* modal 2 start here */}

      <div
        className="modal fade"
        id="footerPart2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Footer Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(handleUpdateFooterLink)}>
                <label htmlFor="facebook">Description</label>
                <textarea
                  rows="5"
                  cols="5"
                  defaultValue={footerLink.facebook}
                  {...register("facebook")}
                  name="facebook"
                  id="facebook"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="instagram">Instagram</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.instagram}
                  {...register("instagram")}
                  name="instagram"
                  id="instagram"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="telegram">Telegram</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.telegram}
                  {...register("telegram")}
                  name="telegram"
                  id="telegram"
                  className="form-control mb-2"
                ></textarea>
                <label htmlFor="twitter">Twitter</label>
                <textarea
                  rows="2"
                  cols="2"
                  defaultValue={footerLink.twitter}
                  {...register("twitter")}
                  name="twitter"
                  id="twitter"
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

export default AdminFooter;
