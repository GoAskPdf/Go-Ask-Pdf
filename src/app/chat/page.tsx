'use client'
import DocumentList from '@/components/Document'
import UserNav from '@/components/Navbar/UserNav'
import Chatsection from '@/components/chat-section/Chatsection'
import React, { useState } from 'react'

const page = () => {
  const [showdoc , setshowdoc] = useState(false);

  return (
    <div className='flex flex-col'>
      <UserNav showchat = {true} />
      <div className='flex flex-row gap-8 max-h-dvh md:p-12 p-2'>
        <DocumentList showdoc={showdoc}  setshowdoc={setshowdoc} />
        <Chatsection showdoc = {showdoc} setshowdoc = {setshowdoc}/>
      </div>
    </div>
  )
}
export default page