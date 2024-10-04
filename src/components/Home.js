import React from "react";
import { Link } from "react-router-dom";
import phone from "../assets/iphone-markup.png";

const Home = () => {
  return (
    <div
      className="grid overflow-y-hidden"
      style={{ gridTemplateColumns: "60% 40%" }}
    >
      <div className="flex justify-center flex-col h-[89vh] font-play text-white pl-10">
        <h1 className="text-[80px]">Snap, Upload, Chat</h1>
        <h3 className="text-[30px]">Your Visuals, Our AI, Endless Insights.</h3>
        <Link to="/chat">
          <p className="px-8 py-3 w-max text-xl mt-6 rounded-3xl bg-white text-black font-medium font-play transition-all ease-in-out duration-500 hover:bg-black hover:text-white hover:cursor-pointer">
            Get Started
          </p>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img src={phone} className="scale-[1.25] drop-shadow-2xl" />
      </div>
    </div>
  );
};

export default Home;
