import React from "react";
import useProjectData from "./hooks/useProjectData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  const [projectData] = useProjectData();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-2">
      <div
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className="row-span-2"
      >
        <img className="h-full w-auto" src={projectData[0]?.image1} alt="" />
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <img className="h-full w-auto" src={projectData[0]?.image2} alt="" />
      </div>
      <div
        data-aos="zoom-in-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <img className="h-full w-auto" src={projectData[0]?.image3} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
