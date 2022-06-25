import React from "react";
import useProjectData from "./hooks/useProjectData";
import Ratings from "./Ratings";

const Information = () => {
  const [projectData] = useProjectData();
  // console.log(projectData);
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
    </div>
  );
};

export default Information;
