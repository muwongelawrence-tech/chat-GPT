"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={ 300 }
        height={ 300 }
        alt="logo"
      />

      <button 
      onClick = { () => signIn("") }
      className="text-white font-bold text-sm animate-pulse uppercase"> 
        Sign In to use LawrenceGPT
    </button>
    </div>
  );
}

export default Login;
