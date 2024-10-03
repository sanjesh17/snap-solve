import React from "react";

const UserPrompt = (props) => {
  const text = props.uPrompt;
  return (
    <div
      className="bg-midground text-white w-max px-3 py-2"
      style={{ borderRadius: "10px 10px 0 10px" }}
    >
      <h5 className="font-medium">Me</h5>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default UserPrompt;
