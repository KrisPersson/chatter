import styled from "styled-components";
import { size } from "../../utils/helpers";

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${size(1)};
`;
