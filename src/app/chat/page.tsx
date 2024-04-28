import DocumentList from '@/components/Document'
import UserNav from '@/components/Navbar/UserNav'
import Chatsection from '@/components/chat-section/Chatsection'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col '>
      <UserNav showchat = {true} />
      <div className='flex flex-row gap-8 p-4'>
        <DocumentList/>
        <Chatsection/>
      </div>
    </div>
  )
}

export default page