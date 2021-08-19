import { AiFillEdit } from "react-icons/ai";

const AdminFooter = () => {
  return (
    <div className="p-3 boxShadow me-3 my-2">
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Edit Footer Here</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <h6 className="mt-3 fs-18">Footer Description</h6>
      <p className="fs-14">Description goes here</p>
      <div className="d-flex justify-content-between my-3">
        <h6 className="fs-18">Update Information</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <label htmlFor="email" className="d-block my-2">
        Email
      </label>
      <input
        type="text"
        className="form-control fs-14"
        name="email"
        value="help@gmail.com"
      />
      <label htmlFor="skype" className="d-block my-2">
        Skype
      </label>
      <input
        type="text"
        className="form-control fs-14"
        name="skype"
        value="+014578218"
      />
      <label htmlFor="whatsApp" className="d-block my-2">
        WhatsApp
      </label>
      <input
        type="text"
        className="form-control fs-14"
        name="whatsApp"
        value="+014578218"
      />
      <div className="d-flex justify-content-between my-4">
        <h6 className="fs-18">Update Social Link</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <label htmlFor="facebook" className="d-block my-2">
        Facebook
      </label>
      <input
        type="text"
        className="form-control fs-14"
        name="facebook"
        value="https://facebook.com"
      />
      <label htmlFor="instagram" className="d-block my-2">
        Instagram
      </label>
      <input
        type="text"
        className="form-control fs-14"
        name="instagram"
        value="https://instagram.com"
      />
      <label htmlFor="telegram" className="d-block my-2">
        Telegram
      </label>
      <input
        type="text"
        className="form-control fs-14"
        name="telegram"
        value="https://telegram.com"
      />
      <label htmlFor="twitter" className="d-block my-2">
        Twitter
      </label>
      <input
        type="text"
        className="form-control fs-14"
        name="twitter"
        value="https://twitter.com"
      />
    </div>
  );
};

export default AdminFooter;
