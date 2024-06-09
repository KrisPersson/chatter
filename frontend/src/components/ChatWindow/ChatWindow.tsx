import "./ChatWindow.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:8000");

export default function ChatWindow() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Listen for chat messages from the server
    socket.on("chat-message", (msg) => {
      setMessages((prevMessages: string[]) => [...prevMessages, msg]);
    });

    // Cleanup on unmount
    return () => {
      socket.off("chat-message");
    };
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("chat-message", input);
    setInput("");
    console.log("function ran as expected");
  };

  socket.on("connect", () => {
    console.log("Client connected!");
  });
  return (
    <div>
      <ul className="chat-feed">
        {messages?.map((msg, index) => (
          <li key={index}>{msg.toString()}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          className=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="send-message-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
