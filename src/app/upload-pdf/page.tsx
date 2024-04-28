"use client"
import DropFiles from '@/components/dropFiles/DropFiles';
import Loader from '@/components/loader/loader'
import React, { useEffect, useState } from 'react'
const page = () => {
    const [loader , setloader] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center h-screen relative bottom-20'>
        <div className="Uploadpdfcontainer flex flex-col justify-center items-center ">
            {/* Heading and Paragraph */}
            <div className='flex flex-col gap-3'>
               <h1 className='text-center text-4xl '>Upload files</h1>
               <p className='text-xl'>PDF, text, images or Presentations. Max 10MB each.</p>
            </div>
                   {/* This is for uploading the files  */}
            <div>
               <DropFiles/>
            </div>
        </div>
    </div>
  )
}

export default page