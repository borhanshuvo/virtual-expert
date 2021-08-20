import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";

const AdminHowToPlaceAnOrder = () => {
  const [answerList, setAnswerList] = useState([]);
  const [number, setNumber] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("http://localhost:8000/placeAnOrderList")
      .then((res) => res.json())
      .then((data) => setAnswerList(data));
  }, [number]);

  // const onSubmit = (data) => {
  //   const title = data.title || answer;
  //   fetch("http://localhost:8000/banner/update", {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ title, _id: bannerData._id, description }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setNumber(number + 1);
  //     });
  // };

  return (
    <div className="p-3 boxShadow me-3 my-2">
      <div className="d-flex justify-content-between">
        <h6 className="fs-24">Edit How to place an order</h6>
        <AiFillEdit size={24} className="text-warning" />
      </div>
      <p>How to place an order</p>
      {answerList.map((answer, index) => {
        const onSubmit = (data) => {
          // const titleName = `title${index}`;
          const title = data.title || answer.title;
          console.log(title);
          // fetch("http://localhost:8000/placeAnOrderList/update", {
          //   method: "PUT",
          //   headers: { "content-type": "application/json" },
          //   body: JSON.stringify({
          //     title,
          //     _id: answer._id,
          //   }),
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     setNumber(number + 1);
          //   });
        };
        return (
          <>
            <div className="d-flex justify-content-between" key={answer._id}>
              <p classNames="fs-14">
                {index + 1}. {answer.title}
              </p>
              <AiFillEdit
                size={24}
                className="text-warning cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target={`#answer${index + 1}`}
              />
            </div>
            <div
              className="modal fade"
              id={`answer${index + 1}`}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      Edit how to place order answer
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <textarea
                        rows="2"
                        cols="5"
                        defaultValue={answer.title}
                        {...register("title")}
                        name="title"
                        id="title"
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
      })}
    </div>
  );
};

export default AdminHowToPlaceAnOrder;
