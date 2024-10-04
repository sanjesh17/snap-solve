import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

const Conversation = (props) => {
  const { setPrompt, userPrompts, aiPrompts, createResponse } = props;
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createResponse(e);
    setInputValue("");
  };

  return (
    <div className="grid place-content-center col-span-3">
      <div className="py-12 w-[700px]">
        <div className="bg-slate-50 p-4 rounded-lg border border-[#ccc]">
          <div
            className="bg-orange-300 w-max-[490px] px-3 py-2 mb-4"
            style={{ borderRadius: "10px 10px 10px 0" }}
          >
            <h5 className="font-medium">SnapSolve</h5>
            <p className="text-sm">Hello, this is SnapSolve</p>
          </div>
          {userPrompts.map((userPrompt, index) => (
            <div key={index}>
              <div className="flex justify-end mb-4">
                <div
                  className="bg-midground text-white px-3 py-2 w-max-[490px] mx-3"
                  style={{ borderRadius: "10px 10px 0 10px" }}
                >
                  <h5 className="font-medium">Me</h5>
                  <p className="text-sm">{userPrompt}</p>
                </div>
              </div>
              {aiPrompts[index] && (
                <div className="mb-4">
                  <div
                    className="bg-orange-300 w-max-[490px] px-3 py-2"
                    style={{ borderRadius: "10px 10px 10px 0" }}
                  >
                    <h5 className="font-medium">SnapSolve</h5>
                    <p className="text-sm">
                      <Markdown remarkPlugins={[remarkGfm]}>
                        {aiPrompts[index]}
                      </Markdown>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center mt-12">
            <input
              type="text"
              placeholder="Message SnapSolve (Press Enter)"
              className="py-2 px-4 border w-full border-[#ccc] rounded-lg"
              value={inputValue}
              onChange={(e) => {
                setPrompt(e.target.value);
                setInputValue(e.target.value);
              }}
              required
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-black text-white rounded-full"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
