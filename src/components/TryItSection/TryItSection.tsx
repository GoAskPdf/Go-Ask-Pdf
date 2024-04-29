"use client"
import React from 'react'
import Image from 'next/image'
import TryImage from '@/assets/Tryit.png'
import Button from '../ReusableComponents/Button'
const TryItSection = () => {
    const handleClick =() => {}
  return (
    <div className="relative w-full h-80">
    <div
      className="absolute inset-0 bg-black opacity-65 z-10"
      style={{ backdropFilter: 'blur(8px)' }}
    ></div>
    {/* Background image */}  
    <Image
      src={TryImage}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white">
      <h1 className="text-5xl font-bold">Unlock the Power of AI</h1>
      <div>
        <p className='mt-5'>Chat with PDFs ask questions, and get instant document summaries.</p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Button btnName="Sign Up" handleClick={handleClick} />
        <div className="bg-white text-black px-4 py-2 rounded-md">Try It</div>
      </div>
    </div>
  </div>
  )
}

export default TryItSection