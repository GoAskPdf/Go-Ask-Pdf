import React from 'react';
import InformationImage from '@/assets/PowerAiChat.png'; // Assuming this path is correct
import Image from 'next/image';

const PowerAiCHat = () => {
  return (
    <div className="flex justify-between items-center h-screen gap-52">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-[11rem]">
        <div className="lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
          <Image
            src={InformationImage}
            alt="Information Screen Image"
            width={500}
            height={400}
            className='rounded-lg'
          />
        </div>
        <div className="lg:w-1/2 lg:order-1 lg:ml-[6.5rem] ">
          <h1 className="text-5xl font-bold mb-4 leading-[4.75rem]">
          Unlock the Power 
          <br />
          of AI Chat
          </h1>
          <p className="text-lg text-gray-700">
          Save time. gain better understanding, and navigate documents efforlessly with our AI chat system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerAiCHat;
