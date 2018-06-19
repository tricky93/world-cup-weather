import React from "react";
import umbrella from "./data/umbrella.jpg";

const Manager = ({ cities, currentCity }) => {
  if (cities[currentCity].weather[0].main.toLowerCase().includes("rain")) {
    return <img src={umbrella} />;
  } else {
    return null;
  }
};

export default Manager;
