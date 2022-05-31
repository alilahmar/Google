import React from "react";
import img from "../images/Ali.jpg";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={img}
      alt="profile picture"
      className={`h-10 rounded-full cursor-pointer transition duration.150 tranform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
