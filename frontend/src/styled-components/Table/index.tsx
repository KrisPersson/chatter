import styled from "styled-components";
import { _headingBase } from "../../styled-components/Headings";
import { size } from "../../utils/helpers";

export const Table = styled.table`
  margin-block: ${size(2)};
`;

export const Tr = styled.tr``;

export const THead = styled.thead``;

export const Th = styled(_headingBase).attrs({ as: "th" })`
  color: var(--c-darker);
  font-weight: 400;
  font-size: 0.75rem;
`;
export const Td = styled(_headingBase).attrs({ as: "td" })`
  color: var(--c-main);
  font-weight: 400;
  cursor: pointer;
`;
