import { useNavigate } from "react-router-dom";
import {
  Header,
  Heading,
  Wrapper,
  ContentWrapper,
  WelcomeText,
} from "./styled";
import ChatWindow from "../../components/ChatWindow/ChatWindow";

export default function Dashboard() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "";

  return (
    <Wrapper>
      <Header>
        <Heading>Dashboard</Heading>
      </Header>
      <ContentWrapper>
        <WelcomeText>Welcome, @{username}</WelcomeText>
      </ContentWrapper>
      <ChatWindow chatName="janne" />
    </Wrapper>
  );
}
