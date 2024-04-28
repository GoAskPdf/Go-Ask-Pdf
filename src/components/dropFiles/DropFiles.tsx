import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Cloud } from 'lucide-react'; 
import { LuUpload } from 'react-icons/lu';
const DropFiles = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'application/pdf': [] },
  });

  return (
    <div className='mt-12'>
      <div {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        <div style={styles.cloudIcon}>
          <Cloud style={{ width:'80px' , height:"80px", color: '#ccc' }} />
        </div>
        <div style={styles.message}>
          {isDragActive ? 'Drop your files here...' : 'Drag & drop your files here'}
        </div>
        <div style={styles.uploadButton}>
         <span> Or</span>
          <button className="relative overflow-hidden focus:outline-none bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-md flex mx-auto gap-2 mt-2">
        <LuUpload className="mt-1" size={17} />
        Browse Files
      </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dropzone: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50rem', 
    height: '20rem',
    border: '2px dashed #ccc',
    borderRadius: '10px',
    backgroundColor: '#F0F4FF80',
    textAlign: 'center',
  },
  cloudIcon: {
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    color: '#F4F4F4',
  },
  uploadButton: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default DropFiles;
