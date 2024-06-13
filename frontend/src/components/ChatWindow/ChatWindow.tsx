import "./ChatWindow.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import {
  Wrapper,
  Header,
  Heading,
  UserFooterContainer,
  Form,
  TextInput,
  SendBtn,
} from "./styled";
const URL = "http://localhost:8000";
const socket = io(URL);

type TChatWindowProps = {
  chatName: string;
};

export default function ChatWindow({ chatName }: TChatWindowProps) {
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
    <Wrapper>
      <Header>
        <Heading>{chatName}</Heading>
      </Header>
      <ul className="chat-feed">
        {messages?.map((msg, index) => (
          <li key={index}>{msg.toString()}</li>
        ))}
      </ul>
      <UserFooterContainer>
        <Form>
          <SendBtn type="submit">Send</SendBtn>
          <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
        </Form>
      </UserFooterContainer>
    </Wrapper>
  );
}
