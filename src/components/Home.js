import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import Gallery from "./Gallery";
import Information from "./Information";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-secondary">
          Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh,
          Matisse, More
        </h1>
        <p className="text-accent text-2xl mt-3 flex">
          Multi-day course
          <span className="mt-2 ml-3">
            <FaRegQuestionCircle></FaRegQuestionCircle>{" "}
          </span>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <Information></Information>
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
