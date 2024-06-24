import { styled } from "styled-components";
import { size } from "../../utils/helpers";
import { List } from "../List";

export const SidebarList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: ${size(1.5)};
  max-height: 25vh;
  overflow-y: auto;

  & > * {
    cursor: pointer;
  }
`;
