import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import Conversation from "../components/Conversation"
import AiPrompts from "./AiPrompts";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [prompt, setPrompt] = useState("");
  const [userPrompts, setUserPrompts] = useState([]);
  const [aiPrompts, setAiPrompts] = useState([]);
  
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!file) {
      alert("Please select an image.");
      return;
    }
    setFormSubmitted(true); // for uploading image

  }

  const createResponse = async (e) => {

    e.preventDefault();
    
    setPrompt("");
    const formData = new FormData();

    console.log('file: ' + file);
    console.log('prompt' + prompt);
   
    formData.append("image", file);
    formData.append("prompt", prompt);

    setUserPrompts((prevItem) => [...prevItem, prompt])
    console.log(prompt);
    console.log('array: '+userPrompts);

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
        console.log('array: '+ aiPrompts);
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
    <div className="grid place-items-center">

      {!formSubmitted && (
        <>
          <form className="grid" onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
            
            <button type="submit">Upload Image</button>
          </form>
        </>
      )}

      {formSubmitted && (
        <div className="w-full">
          <Conversation setPrompt={setPrompt} createResponse={createResponse} userPrompts={userPrompts} aiPrompts={aiPrompts} />
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
