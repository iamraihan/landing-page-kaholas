import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const stars = Array(5).fill(0);
  return (
    <div>
      <div className="flex">
        <div className="flex mr-5">
          {stars.map((star, index) => {
            return (
              <FaStar className="text-2xl text-neutral" key={index}></FaStar>
            );
          })}
        </div>
        <div>
          <p className="text-accent">467 total reviews for this teacher</p>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex mr-5">
          {stars.map((star, index) => {
            return (
              <FaStar className="text-2xl text-neutral" key={index}></FaStar>
            );
          })}
        </div>
        <div>
          <p className="text-accent">5 reviews for this class</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
