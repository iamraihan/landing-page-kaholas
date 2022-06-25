import React, { useEffect, useState } from "react";

const useProjectData = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);
  return [projectData];
};

export default useProjectData;
