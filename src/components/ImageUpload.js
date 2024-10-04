import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import Conversation from "../components/Conversation";
import AiPrompts from "./AiPrompts";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [prompt, setPrompt] = useState("");
  const [previewImg, setPreviewImg] = useState();
  const [userPrompts, setUserPrompts] = useState([]);
  const [aiPrompts, setAiPrompts] = useState([]);

  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image.");
      return;
    }
    setFormSubmitted(true);
  };

  const createResponse = async (e) => {
    e.preventDefault();

    setPrompt("");
    const formData = new FormData();

    console.log("file: " + file);
    console.log("prompt" + prompt);

    formData.append("image", file);
    formData.append("prompt", prompt);

    setUserPrompts((prevItem) => [...prevItem, prompt]);
    console.log(prompt);
    console.log("array: " + userPrompts);

    try {
      const response = await fetch(
        "https://imghack-1.onrender.com/process-image",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResult(data.response);
        setAiPrompts((prevItem) => [...prevItem, data.response]);
        console.log("array: " + aiPrompts);
        console.log(data.response);
      } else {
        setError(data.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("An error occurred while processing the image.");
    }
  };

  return (
    <div className="grid place-items-center gap-4 h-[80vh]">
      {!formSubmitted && (
        <>
          <>
            <div className="flex items-center justify-center w-2/4">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  required
                />
                {file && <span className="text-gray-300">{file.name}</span>}
                <button
                  onClick={handleSubmit}
                  className="text-gray-300 my-3 border px-3 py-2 rounded-lg hover:bg-gray-400 hover:text-white"
                >
                  Start a Snap
                </button>
              </label>
            </div>
          </>
        </>
      )}
      {formSubmitted && (
        <div className="bg-zinc-900 w-5/6 rounded-2xl shadow-xl">
          <div className="w-full grid grid-cols-5 px-3 py-3 relative">
            <div className="col-span-2 grid place-content-center">
              <img src={previewImg} className="max-h-80" />
            </div>

            <Conversation
              setPrompt={setPrompt}
              createResponse={createResponse}
              userPrompts={userPrompts}
              aiPrompts={aiPrompts}
            />
          </div>
        </div>
      )}
      {/* {result && (
        <div>
          <h2>Response:</h2>
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      )}

      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )} */}
    </div>
  );
};

export default ImageUpload;
