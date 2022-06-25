import React from "react";
import useProjectData from "./hooks/useProjectData";
import Ratings from "./Ratings";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

const Information = () => {
  const [projectData] = useProjectData();
  return (
    <div>
      <p className="text-secondary text-2xl">
        In this 5 day class we will explore artists Monet, Matisse, Van Gogh,
        among others and then recreate paintings using crayon and watercolor.
        Students will have fun learning about the artists 8 creating their own
        art inspired by their work.
      </p>
      <div className="my-8 flex">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={projectData[0]?.author} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-primary h-full ml-3 text-2xl font-semibold flex items-center">
            {projectData[0]?.name}
          </h2>
        </div>
      </div>
      <div>
        <Ratings></Ratings>
      </div>
      <h2 className="text-secondary text-2xl ">Completed by 21 learners</h2>
      <div className="lg:flex mt-10">
        <div>
          {" "}
          <button className="btn btn-primary rounded-3xl text-white capitalize text-xl px-5 lg:mr-16">
            See Class Schedule
            <span>
              <FaAngleRight className="text-xl "></FaAngleRight>
            </span>
          </button>
        </div>
        <div className="flex text-primary font-bold text-2xl items-center lg:mr-16">
          <AiOutlineHeart></AiOutlineHeart>
          <h3>Save</h3>
        </div>
        <div className="flex text-primary font-bold text-2xl items-center">
          <RiShareForwardLine></RiShareForwardLine>
          <h3>Share</h3>
        </div>
      </div>
    </div>
  );
};

export default Information;
