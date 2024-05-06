'use client'
import Image from 'next/image';
import React from 'react';
import FileImage from '@/assets/F chat 3.png';
import { ChevronLeft, Cross } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Document {
  title: string;
  fileName: string;
}
interface TrunkType {
  str: string;
  length: number;
}

const truncate = ({ str, length }: TrunkType): string => {
  if (str.length > length) {
    return str.slice(0, length) + '...';
  }
  return str;
};


const documents: Document[] = [
  { title: 'Skilldev.pdf', fileName: 'Skilldev.pdf' },
  { title: 'Career development', fileName: 'Market.pdf' },
  { title: 'Job Market analysis', fileName: 'Job Market analysis.pdf' },
  { title: 'Stocks Q&A', fileName: 'Stocks Q&A.pdf' },
  { title: 'Skilldev.pdf', fileName: 'Skilldev.pdf' },
  { title: 'Career development', fileName: 'Market.pdf' },
  { title: 'Job Market analysis', fileName: 'Job Market analysis.pdf' },
  { title: 'Stocks Q&A', fileName: 'Stocks Q&A.pdf' },
];

const DocumentItem = ({ title, fileName }: Document) => (
  <div className="flex flex-row gap-2 p-3 hover:bg-[#000B26] rounded-lg">
    <div className="bg-[#FFFFFF] rounded-full flex justify-center items-center w-12 h-12">
      <Image src={FileImage} alt="User logo" className="rounded-full" />
    </div>
    <div className="flex flex-col gap-2">
      <span className="rounded-md border border-white">
      <div className="p-1">{truncate({ str: fileName.trim(), length: 20 })}</div>
      </span>
      <span className="font-bold">{truncate({ str: title, length: 20 })}</span>
    </div>
  </div>
);

const DocumentList = ({ showdoc, setshowdoc }: any) => {
  const router = useRouter();

  const handleNewchat = () => {
    router.push('/upload-pdf');
  };

  const handleSection = () => {
    setshowdoc(!showdoc);
  };

  return (
    <div
      className={`md:bg-gradient-to-r from-[#F3F4F660] via-[#F3F4F660] to-[#8E8F9080] bg-black rounded-md w-full md:w-1/4 flex flex-col h-full ${
        showdoc ? 'md:block hidden' : 'block'
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Recent Documents</h1>
          <button onClick={handleSection} className="md:hidden block">
            <ChevronLeft size={20} color="#00C308" />
          </button>
        </div>
        {/* Set a fixed height and enable overflow-y */}
        <div
          className="mt-4 flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-600"
          style={{
          scrollbarColor: '#101010 #E7C200C7',
          scrollbarWidth: 'thin',
        }}
        >
          {documents.map((document) => (
            <DocumentItem key={document.title} {...document} />
          ))}
        </div>
      </div>
      <div className="md:hidden w-full fixed bottom-0 left-1">
        <div className="flex justify-center items-center border-t-2 border-[#FFFFFF1A]">
          <button
            onClick={handleNewchat}
            className="p-8 mt-4 mb-2 rounded-lg flex flex-row gap-2 justify-center items-center px-4 py-2 bg-yellow-400 text-black font-bold"
          >
            <Cross size={20} /> Start New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentList;
