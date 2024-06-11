import { Button } from "../../styled-components/Button";
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

export default function LandingPage() {
  const navigate = useNavigate();

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
        </ButtonWrapper>
      </Wrapper>
    </Main>
  );
}
