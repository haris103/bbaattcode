import React, { useState } from "react";
import axios from "axios";

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8020/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-center text-darkGreen text-2xl font-bold">ChatGPT API</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <a href="" className="text-blue-500 hover:underline">Link</a>
          <label htmlFor="prompt" className="block mt-2">Ask questions</label>
          <input
            id="prompt"
            className="shadow-md w-full py-2 px-3 border border-gray-300 rounded"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600" type="submit">Go</button>
      </form>
      <div className="bg-darkGreen mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Ask me anything..."}
        </p>
      </div>
    </div>
  );
}
