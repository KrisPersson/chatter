import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";

export const ContentWrapper = styled.section`
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

export const ButtonWrapper = styled.div`
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

export const MainHeader = styled(_headingBase).attrs(() => ({ as: "h1" }))`
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
export const SubHeader = styled(_headingBase).attrs(() => ({ as: "h2" }))`
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
