import { useEffect, useState } from "react";
import SingleAnswerCard from "./singleAnswerCard";

const AdminHowToPlaceAnOrder = () => {
  const [answerList, setAnswerList] = useState([]);
  const [number, setNumber] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/placeAnOrderList")
      .then((res) => res.json())
      .then((data) => setAnswerList(data));
  }, [number]);

  return (
    <div className="p-3 boxShadow me-3 my-2">
      <h6 className="fs-24">Edit How to place an order</h6>
      <p>How to place an order</p>
      {answerList?.map((answer, index) => (
        <SingleAnswerCard
          key={answer._id}
          answer={answer}
          index={index}
          setNumber={setNumber}
        />
      ))}
    </div>
  );
};

export default AdminHowToPlaceAnOrder;
