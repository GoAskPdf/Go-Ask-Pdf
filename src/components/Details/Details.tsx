import React from 'react';
import InformationImage from '@/assets/Details.png';
import Image from 'next/image';

const Details = () => {
  return (
    <div className="flex justify-between items-center h-screen gap-52">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row-reverse items-center gap-[11rem]">
        <div className="lg:w-1/2 lg:order-2 mb-4 lg:mb-0 ml-16">
          <Image
            src={InformationImage}
            alt="Information Screen Image"
            width={500}
            height={400}
            className='rounded-lg'
          />
        </div>
        <div className="lg:w-1/2 lg:order-1 lg:ml-[6.5rem] ">
          <h1 className="text-5xl font-bold mb-4 leading-[4.75rem] mr-10">
          Chat with PDF documents using
Al technology for seamless
interaction.
          {/* <br />
          of AI Chat */}
          </h1>
          <p className="text-lg text-gray-700  mr-10">
          Our Al-powered website allows you to have conversations with PDFs
making it easier to ask questions and get document summaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
