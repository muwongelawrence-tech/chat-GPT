import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen  px-2  text-white'>
        <h1 className='text-5xl font-bold mb-20 '> <span className='text-cyan-300'>Lawrence</span>GPT </h1>
     
       <div className=' flex text-center space-x-3'>
           <div className=''>
            <div className='flex flex-col items-center justify-center mb-5 '>
                {/* sun Icon  */}
                <SunIcon className="h-6 w-6 text-white"/>
                <h2 className=''> Examples </h2>
            </div>

            <div className='space-y-2 '>
               <p className='infoText'> Explain quantum computing in simple terms </p>
               <p className='infoText'> Got any creative ideas for a 10 year old’s birthday?</p>
               <p className='infoText'> How do I make an HTTP request in Javascript?</p>
            </div>

           </div>

           <div className=''>
            <div className='flex flex-col items-center justify-center mb-5 '>
                {/* Bolt Icon  */}
                <BoltIcon className="h-6 w-6 text-white"/>
                <h2 className=''> Capabilites </h2>
            </div>

            <div className='space-y-2 '>
               <p className='infoText'> Remembers what user said earlier in the conversation</p>
               <p className='infoText'> Allows user to provide follow-up corrections</p>
               <p className='infoText'> Trained to decline inappropriate requests</p>
            </div>

           </div>

           <div className=''>
            <div className='flex flex-col items-center justify-center mb-5 '>
                {/* ExclamationTriangleIcon */}
                <ExclamationTriangleIcon className="h-6 w-6 text-white"/>
                <h2 className=''> Limitations </h2>
            </div>

            <div className='space-y-2 '>
               <p className='infoText'> May occasionally generate incorrect information </p>
               <p className='infoText'> May occasionally produce harmful instructions or biased content</p>
               <p className='infoText'> Limited knowledge of world and events after 2021</p>
            </div>

           </div>
       </div>
    </div>
  );
}

export default HomePage;
