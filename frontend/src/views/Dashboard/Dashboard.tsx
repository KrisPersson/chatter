import { Button } from "../../styled-components/Button";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Heading,
  Wrapper,
  ContentWrapper,
  WelcomeText,
} from "./styled";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleClick(path: string) {
    navigate(`/${path}`);
  }
  const username = localStorage.getItem("username") || "";

  return (
    <Wrapper>
      <Header>
        <Heading>Dashboard</Heading>
      </Header>
      <ContentWrapper>
        <WelcomeText>Welcome, @{username}</WelcomeText>
      </ContentWrapper>
    </Wrapper>
  );
}
