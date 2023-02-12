import React from 'react'

type Props = {
    chatId: string;
};

function Chat({ chatId } : Props) {
  return (
    <div className='flex-1'>
       chat content
    </div>
  )
}

export default Chat;
