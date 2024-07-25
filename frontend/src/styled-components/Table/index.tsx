import styled from "styled-components";
import { _headingBase } from "../../styled-components/Headings";
import { size } from "../../utils/helpers";

export const Table = styled.table`
  margin-block: ${size(2)};
  max-height: calc(100vh - 335px);
  overflow-y: auto;
`;

export const Tr = styled.tr``;

export const THead = styled.thead``;

export const TBody = styled.tbody`
  max-height: calc(100vh - 335px);
  overflow-y: auto;
`;

export const Th = styled(_headingBase).attrs({ as: "th" })`
  color: var(--c-darker);
  font-weight: 400;
  font-size: 0.75rem;
  text-align: left;
  line-height: 2;
`;
export const Td = styled(_headingBase).attrs({ as: "td" })`
  color: var(--c-main);
  font-weight: 400;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
