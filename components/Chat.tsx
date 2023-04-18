import { useSession } from 'next-auth/react';
import React from 'react'

type Props = {
    chatId: string;
};

function Chat({ chatId } : Props) {

  const { data : session } = useSession()
  
  return (
    <div className='flex-1'>
       chat content
    </div>
  )
}

export default Chat;
