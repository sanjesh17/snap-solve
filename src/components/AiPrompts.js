import React from "react";

const AiPrompts = (props) => {
  const reply = props.aPrompt;
  return (
    <div
      className="bg-orange-300 w-max px-3 py-2"
      style={{ borderRadius: "10px 10px 10px 0" }}
    >
      <h5 className="font-medium">Assistant</h5>
      <p className="text-sm">{reply}</p>
    </div>
  );
};

export default AiPrompts;
