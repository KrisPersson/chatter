import styled from "styled-components";
import { Link } from "react-router-dom";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";

export const SidebarWrapper = styled.div`
  background: var(--c-background-darker);
  padding-inline: var(--main-gutter);
  position: relative;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${size(2.5)};
  border-bottom: 1px solid var(--c-background-default);
  padding-block: var(--main-gutter);
`;

export const UserFooterContainer = styled.footer`
  background: var(--c-black);
  margin-top: auto;
  position: absolute;
  min-width: 100%;
  min-height: 50px;
  padding: ${size(1)} var(--main-gutter);
  bottom: 0;
  left: 0;
  z-index: 10;

  @media (min-width: 900px) {
    max-width: 300px;
    width: 100%;

    min-width: unset;
  }
`;

export const Heading = styled(_headingBase).attrs(() => ({ as: "h3" }))`
  color: var(--c-darker);
  font-size: 0.75rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 500;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${size(0.5)};
`;

export const ChannelLink = styled(Link)`
  color: var(--c-main);
  font-size: 1rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 500;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: var(--c-darker);
  font-size: 1rem;
  line-height: 0.55;
  max-width: fit-content;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;
