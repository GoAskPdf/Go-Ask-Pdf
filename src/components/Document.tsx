'use client'
import Image from 'next/image';
import React from 'react';
import FileImage from '@/assets/F chat 3.png'
import UserAvatar from '@/assets/b84078f59fedb0ab8eee6f0eeb77dcc2.png';
import { ChevronLeft, Cross } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface Document {
  title: string;
  fileName: string;
}

const documents: Document[] = [
  { title: 'Skilldev.pdf', fileName: 'Skilldev.pdf' },
  { title: 'Career development', fileName: 'Market.pdf' },
  { title: 'Job Market analysis', fileName: 'Job Market analysis.pdf' },
  { title: 'Stocks Q&A', fileName: 'Stocks Q&A.pdf' },
];

const DocumentItem = ({ title, fileName }: Document) => {
    
  return (
    <div className="flex flex-row gap-2 p-3 hover:bg-[#000B26] rounded-full">
        <div className="bg-[#FFFFFF] rounded-full flex justify-center items-center w-12 h-12">
          <Image
            src={FileImage}
            alt="User logo"
            className="rounded-full"
          />
        </div>
        <div className='flex flex-col gap-2'>
           <span className='rounded-md border border-white'><div className='p-1'>
            {fileName}</div></span> 
           <span className='font-bold'>{title}</span>
        </div>
    </div>
  );
};

const DocumentList = () => {
    const router = useRouter();
    const handleNewchat = ()=>{
         router.push('/upload-pdf');
    }
    const handleSection = ()=>{
        
    }
  return (
   <div className='md:bg-gray-400 bg-black rounded-md md:w-fit w-full flex flex-col'>
    <div className='p-4'>
   <div className='flex justify-between items-center '> <h1 className="font-bold text-xl">Recent Documents</h1>  <button onClick={handleSection} className='md:hidden block'><ChevronLeft size={26} color='#00C308' /></button>  </div> 
          <div className='mt-4 flex flex-col'>
          {documents.map((document) => (
        <DocumentItem key={document.title} {...document} />
      ))}
        <div className='md:hidden block'>
            <div className="line w-full h-1 bg-[#FFFFFF1A] mt-16"/>
            <div className='flex justify-center items-center'>
            <button onClick={handleNewchat} className="mt-4 rounded-lg flex flex-row gap-2 justify-center items-center px-4 py-2 bg-yellow-400 text-black font-bold">
            <Cross size={20} /> Start New Chat
            </button></div>
            </div>
        </div>
          </div>
    </div>
  );
};

export default DocumentList;
