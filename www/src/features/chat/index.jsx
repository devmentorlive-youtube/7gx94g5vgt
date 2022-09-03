import { useState, useEffect, useRef } from "react";

export default function VipChat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = new WebSocket(process.env.NEXT_PUBLIC_SOCKET_HOST);
    ref.current.onopen = (e) => {
      console.log("Connected!");
    };

    ref.current.onmessage = (e) => {
      const json = JSON.parse(e.data);

      if (json.type === "chat-message")
        setMessages((prev) => [...prev, json.payload]);
    };

    return () => {
      ref.current.close();
    };
  }, []);

  return (
    <div className="">
      <div className=" ">
        {messages.map(({ user, text }) => (
          <div>
            <div>{user.name}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>

      <input
        className="border p-2 bg-white text-gray-900 w-full"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
