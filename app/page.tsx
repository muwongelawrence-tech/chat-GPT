import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen  px-2  text-white'>
        <h1 className='text-5xl font-bold mb-20 '> ChatGPT</h1>
     
       <div className=' flex text-center space-x-3'>
           <div className=''>
            <div className='flex flex-col items-center justify-center mb-5 '>
                {/* sun Icon  */}
                <SunIcon className="h-6 w-6 text-white"/>
                <h2 className=''> Examples </h2>
            </div>

            <div className='space-y-2 '>
               <p className='infoText'> Explain something to me </p>
               <p className='infoText'> "what is the difference between a dog and a cat?"</p>
               <p className='infoText'> "what is the color of the sun?"</p>
            </div>

           </div>

           <div className=''>
            <div className='flex flex-col items-center justify-center mb-5 '>
                {/* Bolt Icon  */}
                <BoltIcon className="h-6 w-6 text-white"/>
                <h2 className=''> Capabilites </h2>
            </div>

            <div className='space-y-2 '>
               <p className='infoText'> Explain something to me </p>
               <p className='infoText'> "what is the difference between a dog and a cat?"</p>
               <p className='infoText'> "what is the color of the sun?"</p>
            </div>

           </div>

           <div className=''>
            <div className='flex flex-col items-center justify-center mb-5 '>
                {/* ExclamationTriangleIcon */}
                <ExclamationTriangleIcon className="h-6 w-6 text-white"/>
                <h2 className=''> Limitations </h2>
            </div>

            <div className='space-y-2 '>
               <p className='infoText'> Explain something to me </p>
               <p className='infoText'> "what is the difference between a dog and a cat?"</p>
               <p className='infoText'> "what is the color of the sun?"</p>
            </div>

           </div>
       </div>
    </div>
  );
}

export default HomePage;
