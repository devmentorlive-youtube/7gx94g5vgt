import { useState } from "react";

import VipChat from "@/features/chat";

export default function Homepage() {
  const [showChat, setShowChat] = useState(true);

  return (
    <div className=" flex items-start h-screen w-screen overflow-hidden">
      <div
        className={`${
          showChat ? "sm:w-4/5" : "sm:w-[98%]"
        } border h-screen transition-all duration-500`}>
        STREAM 1
      </div>
      <div
        className={`${
          showChat ? "sm:w-1/5" : "sm:w-[2%]"
        } border-pink-500 border-2 h-screen `}>
        <div className="w-full flex flex-row-reverse p-3">
          <button
            className="block"
            onClick={() => setShowChat((prev) => !prev)}>
            {showChat ? <span>X</span> : <span>[]</span>}
          </button>
        </div>
        {showChat ? <VipChat /> : ""}
      </div>
    </div>
  );
}
