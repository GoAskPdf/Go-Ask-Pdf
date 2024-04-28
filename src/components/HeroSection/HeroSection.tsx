"use client";
import React from "react";
import { LuUpload } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="text-center mt-10 relative top-[109px]">
      <div className="relative text-center">
        <h1 className="text-5xl font-bold mb-12 line-clamp-2">
          Interact with PDFs like never before
        </h1>
      </div>
      <div className="mb-8">
        <p className="font-bold">
          Discover a new way to chat with PDFs, ask questions, and summarize
          documents with our AI-powered system.
        </p>
      </div>
      <button className="relative overflow-hidden focus:outline-none bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-md flex mx-auto gap-2">
        <LuUpload className="mt-1" size={17}/>
        Upload Your Pdf
      </button>
    </div>
  );
};

export default HeroSection;
