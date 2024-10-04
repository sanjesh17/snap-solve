import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid" style={{ gridTemplateColumns: "60% 40%" }}>
      <div className="border flex justify-center flex-col h-[89vh] font-play text-white pl-10">
        <h1 className="text-[80px]">Snap, Upload, Chat</h1>
        <h3 className="text-[30px]">Your Visuals, Our AI, Endless Insights.</h3>
        <p className="px-5 py-3 w-max text-xl mt-6 rounded-xl bg-white text-black font-medium transition-all ease-in-out duration-200 hover:-translate-y-0.5 cursor-pointer">
          Get Started
        </p>
      </div>
      <div className="border">Hii</div>
    </div>
  );
};

export default Home;
