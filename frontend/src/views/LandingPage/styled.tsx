import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";

export const Main = styled.main`
  max-height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-rows: ${size(2)} repeat(6, 1fr) ${size(2)};
  grid-template-columns: ${size(2)} 1fr ${size(2)};
  row-gap: 0;

  @media (min-width: 900px) {
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: 15vw repeat(2, 1fr) 15vw;
  }
`;

export const Wrapper = styled.div`
  grid-column: 2 / -2;
  grid-row: 3 / -4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${size(8)};

  @media (min-width: 600px) {
    align-items: center;
  }
  @media (min-width: 900px) {
    align-items: flex-start;
    grid-row: 3 / -3;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  gap: ${size(4)};
  grid-row: 2 / span 2;
  grid-column: 2 / -2;
  margin-inline: auto;

  @media (min-width: 600px) {
    margin-inline: unset;
    grid-row: 2 / span 2;
    grid-column: 2 / -2;
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
