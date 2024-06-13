import styled from "styled-components";
import { HeaderWrapper } from "../Header/styled";
import { SidebarWrapper } from "../Sidebar/styled";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 82px 1fr;
  min-height: 100vh;

  ${HeaderWrapper} {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
  }
  ${SidebarWrapper} {
    grid-column: 1 / span 1;
    grid-row: 2 / -1;
  }
`;

export const Main = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  padding: var(--main-gutter);
`;
