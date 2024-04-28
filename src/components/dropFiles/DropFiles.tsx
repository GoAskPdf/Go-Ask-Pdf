import React from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { Cloud } from 'lucide-react';
import { LuUpload } from 'react-icons/lu';
import Image from 'next/image';
import CloudImage from '@/assets/Cloud upload 1.png'
// Styled component with responsive media queries
const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 20rem;
  border: 2px dashed #ccc;
  border-radius: 10px;
  background-color: #f0f4ff80;
  text-align: center;

  /* Responsive design for smaller screens */
  @media (max-width: 600px) {
    width: 20rem;
    height: 20rem;
  }
`;

const DropFiles = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'application/pdf': [] },
  });

  return (
    <div className='mt-12'>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <div>
          <Image alt='CloudImage' src={CloudImage} style={{ width: '80px', height: '80px' }} />
        </div>
        <div>
          {isDragActive ? 'Drop your files here...' : 'Drag & drop your files here'}
        </div>
        <div>
          <span>Or</span>
          <button className="relative overflow-hidden focus:outline-none bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-md flex mx-auto gap-2 mt-2">
            <LuUpload className="mt-1" size={17} />
            Browse Files
          </button>
        </div>
      </DropzoneContainer>
    </div>
  );
};

export default DropFiles;
