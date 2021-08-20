import Image from 'next/image';
import questionImage from '../../../../images/Img.svg';

const HowToPlaceAnOrder = ({ placeAnOrderData, placeAnOrderListData }) => {
  return (
    <section className="py-5 background-color-skyblue ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5">
            <Image
              src={questionImage}
              alt="questionImg"
              height="411"
              width="574"
            />
          </div>
          <div className="col-12 col-md-7">
            <h6 className="fs-28 textLeftAfterEffect">
              {placeAnOrderData?.title}
            </h6>
            {placeAnOrderListData.map((item, index) => (
              <div key={item._id} className="d-flex fs-14 mt-4">
                <span className="me-2 numberBefore">
                  {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                </span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaceAnOrder;
