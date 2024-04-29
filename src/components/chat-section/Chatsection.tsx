'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Send } from 'lucide-react';
import Image from 'next/image';
import UserAvatar from '@/assets/b84078f59fedb0ab8eee6f0eeb77dcc2.png';
import AiAvatar from '@/assets/logo.png';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

const ChatSection = ({showdoc , setshowdoc}:any) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const router = useRouter();

  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user's message
    setMessages((prev) => [...prev, { sender: 'user', text: inputText }]);

    // Simulate AI response
    setMessages((prev) => [
      ...prev,
      { sender: 'ai', text: `AI response to "${inputText}"` },
    ]);

    setInputText('');
  };

  const handleSection =()=>{
    setshowdoc(!showdoc)
  }

  console.log("showdoc" , showdoc)

  return (
    <div className={`bg-gradient-to-r from-[#F3F4F660] via-[#F3F4F660] to-[#8E8F9080] bg-black rounded-md w-full flex flex-col min-h-screen md:block
    ${
      !showdoc ? 'md:block hidden ' : ''
    }
    `}>
      <div className="flex flex-row justify-between items-center p-4 md:hidden">
        <button onClick={handleSection}>
          <ChevronLeft size={26} color="#00C308" />
        </button>
      </div>

      <div
        className="flex flex-col p-4 overflow-y-auto h-full rounded-md scrollbar-thin scrollbar-thumb-[#101010] scrollbar-track-gray-200 flex-grow"
        style={{
          scrollbarColor: '#101010 #E7C200C7',
          scrollbarWidth: 'thin',
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === 'user' ? 'flex-row' : 'flex-row-reverse'
            } items-center my-2`}
          >
            <div
              className={`${
                message.sender === 'ai' ? 'bg-[#E7C200C7]' : ''
              } p-2 rounded-md flex items-center gap-2 max-w-xs`}
            >
              {message.sender === 'user' ? (
                <>
                  <div className="bg-green-300 rounded-full flex justify-center items-center w-12 h-12">
                    <Image
                      src={UserAvatar}
                      alt="User logo"
                      className="rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span>{message.text}</span>
                </>
              ) : (
                <>
                  <span>{message.text}</span>
                  <div className="rounded-full flex justify-center items-center w-12 h-12">
                    <Image
                      src={AiAvatar}
                      alt="AI logo"
                      className="rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row p-4 sticky bottom-0">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-grow p-2 border  rounded-l-full text-black h-12 focus:border-white"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="text-white bg-white rounded-r-full p-3"
        >
          <Send color='#00C308'/>
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
