import React from "react";
import useProjectData from "./hooks/useProjectData";

const Gallery = () => {
  const [projectData] = useProjectData();
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="row-span-2">
        <img className="h-full w-auto" src={projectData[0]?.image1} alt="" />
      </div>
      <div>
        <img className="h-full w-auto" src={projectData[0]?.image2} alt="" />
      </div>
      <div>
        <img className="h-full w-auto" src={projectData[0]?.image3} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
