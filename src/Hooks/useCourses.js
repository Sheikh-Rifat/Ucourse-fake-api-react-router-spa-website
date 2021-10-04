import { useEffect, useState } from "react";

// declaring global data to use in multiple components
const useCourses = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  //   returning data
  return [courses, setCourse];
};

export default useCourses;
