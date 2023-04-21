"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();

  // console.log(data);

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 ">
        {/* New Chat */}
        <NewChat />

        <div className="hidden sm:inline">
          {/* Model selection */}
          <ModelSelection />
        </div>

        <div className="flex flex-col space-y-2 my-2">
          {loading && (
            <div className="animate-pilse text-white text-center">
              <p>Loading Chats....</p>
            </div>
          )}

          {/* map through the chat rows */}

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session.user?.image!}
          alt="Profile pic"
        />
      )}
    </div>
  );
}

export default SideBar;
