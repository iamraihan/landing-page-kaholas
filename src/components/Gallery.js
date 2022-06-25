import React from "react";
import useProjectData from "./hooks/useProjectData";

const Gallery = () => {
  const [projectData] = useProjectData();
  console.log(projectData);
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
};

export default Gallery;
