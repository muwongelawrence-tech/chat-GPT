'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { db } from '../firebase';
import useSWR from "swr";
import ModelSelection from './ModelSelection';

type Props = {
    chatId: string;
};

function ChatInput({chatId}: Props) {

  const { data: session } = useSession();
  const [ prompt , setPrompt ] = useState("");


  // useSWR to get model .......
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if(!prompt) return;

        const input = prompt.trim();
    
        const message:  Message = {
            text: input,
            createdAt : serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${ session?.user?.name}`
            }
        }

        setPrompt("");

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), 
           message 
        )

        // Toast the notification for loading

        const notification = toast.loading("Lawrence'sGPT is thinking...");

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: input,
                 chatId,
                  model,
                 session
            })
        }).then(() => {
            // Toast the successful message.........
            toast.success('chatGpt has responded!!', {
                id: notification,
            })

        });

  }

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm mx-4'>
      <form 
       onSubmit={ sendMessage }
       className='p-2 md:p-5  space-x-2 md:space-x-5 flex'>
        <input 
          type="text"
          value={prompt}
          disabled = {!session}
          onChange = { e => setPrompt(e.target.value)}
          placeholder='Type your message here...'
          className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
         />

         <button 
         disabled = { !prompt || !session }
         type='submit' 
         className={`bg-[#11A37F] hover:opacity-50 text-white font-bold px-2 md:px-4  py-0 md:py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed`}>
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>
         </button>

         <div className='hidden'>
            {/* ModelSelection */}
            <ModelSelection />
         </div>

      </form>
    </div>
  )
}

export default ChatInput
