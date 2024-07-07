import styled from "styled-components";
import { HeaderWrapper } from "../Header/styled";
import { SidebarWrapper } from "../Sidebar/styled";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 98px 1fr;
  min-height: 100vh;

  @media (min-width: 900px) {
    grid-template-columns: 300px 1fr 300px;
  }

  ${HeaderWrapper} {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
  }
  ${SidebarWrapper} {
    position: absolute;
    max-height: calc(100vh - 98px);
    inset: 0px;
    top: 98px;
    background: var(--c-background-darker);
    z-index: 2;

    @media (min-width: 900px) {
      display: block;
      position: unset;

      grid-column: 1 / span 1;
      grid-row: 2 / -1;
    }
  }
`;

export const Main = styled.main`
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  padding: var(--main-gutter);

  @media (min-width: 900px) {
    grid-column: 2 / -1;
    grid-row: 2 / -1;
`;
