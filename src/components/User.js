import React from "react";

export const User = ({ userData }) => {
  const { name, handle } = userData;
  return (
    <div>
      <span className="user">
        <span className="name">{name}</span>
        <span className="handle">{handle}</span>
      </span>
    </div>
  );
};
