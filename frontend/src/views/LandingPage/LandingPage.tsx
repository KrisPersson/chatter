import { Button } from "../../styled-components/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContentWrapper,
  HeaderWrapper,
  MainHeader,
  SubHeader,
  Img,
  ButtonWrapper,
  Main,
  Wrapper,
} from "./styled";
import { verifyTokenApi } from "../../api/auth";

export default function LandingPage() {
  const navigate = useNavigate();
  async function checkAuth() {
    const auth = await verifyTokenApi();
    if (auth.success) {
      navigate("/dashboard");
    }
  }

  useEffect(() => {
    checkAuth();
  });

  function handleClick(path: string) {
    navigate(`/${path}`);
  }

  return (
    <Main>
      <Wrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <MainHeader>Chatter</MainHeader>
            <SubHeader>Let's chat!</SubHeader>
          </HeaderWrapper>
          <Img src="/logo.png" alt="Chatter logo" />
        </ContentWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleClick("login")} $primary>
            Log in
          </Button>
          <Button onClick={() => handleClick("signup")}>Sign up</Button>
          <Button onClick={() => handleClick("health")}>Health</Button>
        </ButtonWrapper>
      </Wrapper>
    </Main>
  );
}
