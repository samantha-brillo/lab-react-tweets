import React from "react";

export const ProfileImage = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img src={image} className="profile" alt="profile" />
    </div>
  );
};
