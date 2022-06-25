import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
// import Rating from "react-rating";

const Ratings = () => {
  const [rate, setRate] = useState([]);
  useEffect(() => {
    fetch("/fakeApiRating.json")
      .then((res) => res.json())
      .then((data) => setRate(data));
  }, []);
  console.log(rate[0]?.rating);
  return (
    <div>
      <div className=" mr-5">
        {rate.map((star) => (
          <div className="flex mb-2" key={star._id}>
            <Rating
              initialRating={star.raring}
              emptySymbol={<FaStar className="text-2xl text-neutral"></FaStar>}
              readonly
            />
            <p className="text-accent ml-3 text-xl">{star.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
