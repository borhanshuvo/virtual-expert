import Image from "next/image";
import questionImage from "../../../../images/Img.svg";

const HowToPlaceAnOrder = ({ placeAnOrderData, placeAnOrderListData }) => {
  return (
    <section className="py-5 background-color-skyblue ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 p-3">
            <Image
              src={questionImage}
              alt="questionImg"
              height="411"
              width="574"
            />
          </div>
          <div className="col-12 col-md-7 ps-md-5">
            <h2 className="fs-28 textLeftAfterEffect font-family-roboto lh-44 mb-5">
              {placeAnOrderData[0].title}
            </h2>
            {placeAnOrderListData?.map((item, index) => (
              <div key={item._id} className="d-flex fs-15 lh-30 mt-2">
                <span className="me-2 numberBefore">
                  {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                </span>
                <p className="fs-15 lh-30">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaceAnOrder;
