import React from "react";
import { LuUpload } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="text-center mt-10 flex justify-center items-center h-screen flex-col relative bottom-44">
      <div className="relative text-center">
        <h1 className="text-6xl font-bold mb-12 line-clamp-none space-y-2 flex flex-col">
          Interact With PDFs Like <span className="mt-2">Never Before</span>
        </h1>
      </div>
      <div className="mb-8">
        <p
          className="font-bold"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Discover a new way to chat with PDFs, ask questions and summarize
          documents with our AI-powered system.
        </p>
      </div>
      <button className="relative overflow-hidden focus:outline-none bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-md flex mx-auto gap-2">
        <LuUpload className="mt-1" size={17} />
        Upload Your Pdf
      </button>
    </div>
  );
};

export default HeroSection;
