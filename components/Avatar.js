import React from "react";
import img from "../images/Ali.jpg";
import Image from "next/image";
const Avatar = ({ url, className }) => {
  return (
    <Image
      loading="lazy"
      src={img}
      alt="profile picture"
      width={40}
      height={40}
      className={`h-2 rounded-full cursor-pointer transition duration.150 tranform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
