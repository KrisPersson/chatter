import styled from "styled-components";
import { _headingBase } from "../../styled-components/Headings";
import { size } from "../../utils/helpers";
import { Button } from "../../styled-components/Button";

const Main = styled.main`
  max-height: 100vh;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(12, 1fr);
  row-gap: 50px;
`;
const ContentWrapper = styled.section`
  display: flex;
  gap: ${size(4)};
  grid-row: 3 / span 1;
  grid-column: 2 / -2;
  @media (min-width: 600px) {
    grid-row: 3 / span 2;
    grid-column: 3 / span 7;
    gap: ${size(8)};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size(4)};
  grid-row: 5 / span 1;
  grid-column: 2 / -2;

  & > * {
    align-self: flex-start;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    grid-column: 3 / span 5;
  }
`;

const MainHeader = styled(_headingBase).attrs(() => ({ as: "h1" }))`
  color: var(--c-primary-default);
  font-size: 4rem;
  line-height: 1;
  max-width: fit-content;
  @media (max-width: 370px) {
    font-size: 5rem;
  }
  @media (min-width: 600px) {
    font-size: 6rem;
  }
  @media (min-width: 900px) {
    font-size: 8rem;
  }
`;
const SubHeader = styled(_headingBase).attrs(() => ({ as: "h2" }))`
  color: var(--c-white);
  font-size: 2rem;
  line-height: 1;
  max-width: fit-content;
  align-self: flex-end;
  @media (min-width: 600px) {
    font-size: 3rem;
  }
  @media (min-width: 900px) {
    font-size: 4rem;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;
const Img = styled.img`
  width: ${size(10)};
  height: auto;
  align-self: flex-start;
  @media (max-width: 370px) {
    display: none;
  }
  @media (min-width: 600px) {
    width: ${size(15)};
  }
  @media (min-width: 900px) {
    width: ${size(20)};
  }
`;

export default function LandingPage() {
  return (
    <Main>
      <ContentWrapper>
        <HeaderWrapper>
          <MainHeader>Chatter</MainHeader>
          <SubHeader>Let's chat!</SubHeader>
        </HeaderWrapper>
        <Img src="/logo.png" alt="Chatter logo" />
      </ContentWrapper>
      <ButtonWrapper>
        <Button $primary>Log in</Button>
        <Button>Sign up</Button>
      </ButtonWrapper>
    </Main>
  );
}
