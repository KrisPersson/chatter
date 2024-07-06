import styled from "styled-components";
import { _headingBase } from "../../styled-components/Headings";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";

export const HeaderWrapper = styled.header`
  background: var(--c-background-darker);
  padding: var(--main-gutter);
  ${ProfileCirclePic} {
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
`;

export const Heading = styled(_headingBase).attrs(() => ({ as: "h1" }))`
  color: var(--c-primary-default);
  font-size: 2.25rem;
  line-height: 1;
  max-width: fit-content;
  cursor: pointer;
`;
