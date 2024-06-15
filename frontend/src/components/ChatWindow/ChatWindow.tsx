import "./ChatWindow.css";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import {
  Wrapper,
  Header,
  Heading,
  UserFooterContainer,
  Form,
  TextInput,
  SendBtn,
  ChatFeed,
} from "./styled";
import ChatItem from "./ChatItem";
import { TMessage } from "../../types";
const URL = "http://localhost:8000";
const socket = io(URL);

type TChatWindowProps = {
  chatName: string;
};

export default function ChatWindow({ chatName }: TChatWindowProps) {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [input, setInput] = useState("");
  const chatFeedRef = useRef<null | HTMLUListElement>(null);
  const username = localStorage.getItem("username");

  useEffect(() => {
    // Listen for chat messages from the server
    socket.on("chat-message", (msg: TMessage) => {
      setMessages((prevMessages: TMessage[]) => [...prevMessages, msg]);
    });

    // Cleanup on unmount
    return () => {
      socket.off("chat-message");
    };
  }, []);
  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTop = chatFeedRef.current.scrollHeight;
    }
    console.log("ran function");
  }, [messages]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("chat-message", {
      textBody: input,
      senderUsername: username,
      sentAt: new Date(),
    });
    setInput("");
  };

  socket.on("connect", () => {
    console.log("Client connected!");
  });
  return (
    <Wrapper id="chat-window">
      <Header>
        <Heading>{chatName}</Heading>
      </Header>
      <ChatFeed ref={chatFeedRef}>
        {messages?.map((msg, index) => (
          <ChatItem key={index} msg={msg} />
        ))}
      </ChatFeed>
      <UserFooterContainer>
        <Form onSubmit={sendMessage}>
          <SendBtn type="submit">Send</SendBtn>
          <TextInput value={input} onChange={(e) => setInput(e.target.value)} />
        </Form>
      </UserFooterContainer>
    </Wrapper>
  );
}
