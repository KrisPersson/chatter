import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";
import { Link } from "react-router-dom";

export const ContentWrapper = styled.section`
  display: flex;
  gap: ${size(3)};
  padding-block: ${size(4)};
  grid-row: 2 / span 1;
  grid-column: 2 / -2;
  margin-inline: auto;
  @media (min-width: 1200px) {
    grid-row: 3 / span 2;
    grid-column: 2 / span 1;
    gap: ${size(6)};
  }
`;

export const MainHeader = styled(_headingBase).attrs(() => ({ as: "h1" }))`
  color: var(--c-primary-default);
  font-size: 4rem;
  line-height: 1;
  max-width: fit-content;
  @media (max-width: 370px) {
    font-size: 4rem;
  }
  @media (min-width: 600px) {
    font-size: 5rem;
  }
  @media (min-width: 900px) {
    font-size: 6rem;
  }
`;
export const SubHeader = styled(_headingBase).attrs(() => ({ as: "h2" }))`
  color: var(--c-white);
  font-size: 2rem;
  line-height: 1;
  max-width: fit-content;
  align-self: flex-end;
  @media (min-width: 600px) {
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;
export const Img = styled.img`
  width: ${size(8)};
  height: auto;
  align-self: flex-start;

  @media (min-width: 600px) {
    width: ${size(10)};
  }
  @media (min-width: 900px) {
    width: ${size(15)};
  }
`;

export const BottomLine = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-darker);
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: var(--c-main);
`;
