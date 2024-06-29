import "./ChatWindow.css";
import { useState, useEffect, useRef } from "react";
import { SendBtn } from "../../styled-components/Button";
import { io } from "socket.io-client";
import {
  Wrapper,
  Header,
  Heading,
  UserFooterContainer,
  Form,
  TextInput,
  ChatFeed,
} from "./styled";
import ChatItem from "./ChatItem";
import UserChatItem from "../UserChatItem/UserChatItem";
import ChatMembersColumn from "./ChatMembersColumn";
import { TMessage, TChannelMember } from "../../types";
import { useLocation } from "react-router-dom";
import { extractSearchParams } from "../../utils/helpers";
import { getChannel } from "../../api/channel";
import { getRelationship } from "../../api/relationship";
import { WEBSOCKET_URL } from "../../api";

const URL = WEBSOCKET_URL;
const socket = io(URL, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

export default function ChatWindow() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [members, setMembers] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const location = useLocation();
  const channelName = extractSearchParams(location.search);
  const [currentChat, setCurrentChat] = useState("");
  if (currentChat !== channelName.value) {
    setCurrentChat(channelName.value);
    setMessages([]);
  }
  const chatFeedRef = useRef<null | HTMLUListElement>(null);
  const username = localStorage.getItem("username");

  async function updateChatStateFromDb() {
    if (channelName.key === "channel") {
      const { members, messages } = await getChannel(channelName.value);
      const memberUsernames: string[] = members.map(
        (member: TChannelMember) => member.username
      );
      setMembers(memberUsernames);
      setMessages(messages);
    } else if (channelName.key === "dm") {
      const { relationship } = await getRelationship(channelName.value);
      const { usernames, messages } = relationship;
      setMembers(usernames);
      setMessages(messages);
    }
  }

  useEffect(() => {
    updateChatStateFromDb();
  }, [currentChat]);

  useEffect(() => {
    socket.emit("joinRoom", { room: channelName.value, username });
    // Listen for chat messages from the server
    socket.on("chat-message", (msg: TMessage) => {
      setMessages((prevMessages: TMessage[]) => [...prevMessages, msg]);
    });

    // Cleanup on unmount
    return () => {
      socket.emit("leaveRoom", { room: currentChat, username });
      socket.off();
    };
  }, [currentChat]);
  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTop = chatFeedRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    socket.emit("chat-message", {
      textBody: input,
      senderUsername: username,
      sentAt: new Date(),
      channel: currentChat,
      channelType: channelName.key,
    });
    setInput("");
  };
  socket.on("connect", () => {
    console.log("Client connected!");
  });
  return (
    <Wrapper id="chat-window" $isDm={channelName.key === "dm"}>
      <Header $isDm={channelName.key === "dm"}>
        <Heading>
          {channelName.key === "dm" ? "" : "#"}
          {channelName.key === "dm" && members.length > 0
            ? members.map((member) => (
                <UserChatItem users={[member]} key={"user " + member} />
              ))
            : channelName.value}
        </Heading>
      </Header>
      <ChatFeed ref={chatFeedRef}>
        {messages?.map((msg, index) => (
          <ChatItem key={index} msg={msg} />
        ))}
      </ChatFeed>
      {channelName.key === "channel" && <ChatMembersColumn members={members} />}
      <UserFooterContainer>
        <Form onSubmit={sendMessage}>
          <SendBtn type="submit">Send</SendBtn>
          <TextInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message a hit "Enter"'
          />
        </Form>
      </UserFooterContainer>
    </Wrapper>
  );
}
