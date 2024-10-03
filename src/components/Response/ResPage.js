import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("prompt", prompt);

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
      } else {
        setError(data.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("An error occurred while processing the image.");
    }
  };

  return (
    <div>
      <h1>Upload and Process an Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
        <br />
        <input
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter prompt (optional)"
        />
        <br />
        <button type="submit">Upload</button>
      </form>

      {result && (
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
      )}
    </div>
  );
};

export default ImageUpload;
