import {
  Header,
  Heading,
  Wrapper,
  ContentWrapper,
  WelcomeText,
} from "./styled";

export default function Dashboard() {
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
