import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";

export const HeaderWrapper = styled.header`
  background: var(--c-background-darker);
  padding: ${size(2)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled(_headingBase).attrs(() => ({ as: "h1" }))`
  color: var(--c-primary-default);
  font-size: 2.25rem;
  line-height: 1;
  max-width: fit-content;
`;
