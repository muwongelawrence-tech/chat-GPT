'use client'

import { signOut, useSession } from 'next-auth/react';
import NewChat from './NewChat';

function SideBar() {

  const { data } = useSession();

  console.log(data);

  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1 '>
            {/* New Chat */}
               <NewChat />
            <div>
              {/* Model selection */}
            </div>

            {/* map through the chat rows */}


        </div>

        { data && <img 
        onClick = { () => signOut()}
        className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
        src = {data.user?.image!} alt="Profile pic" />}
    </div>
  );
}

export default SideBar;
