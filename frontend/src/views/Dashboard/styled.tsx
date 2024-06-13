import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";

export const Wrapper = styled.section`
  min-width: 100%;
  min-height: 100%;
`;

export const WelcomeText = styled(_headingBase).attrs(() => ({ as: "p" }))`
  color: var(--c-main);
  font-size: 6rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 400;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 164px);
`;

export const Header = styled.header`
  border-bottom: 1px solid var(--c-black);
  padding-bottom: var(--main-gutter);
`;

export const Heading = styled(_headingBase).attrs(() => ({ as: "h2" }))`
  color: var(--c-darker);
  font-size: 2rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 400;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;
export const Img = styled.img`
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
