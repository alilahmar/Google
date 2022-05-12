import React from "react";

const Avatar = ({ url }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile picture"
      className="h-10 rounded-full cursor-pointer transition duration.150 tranform hover:scale-110"
    />
  );
};

export default Avatar;
