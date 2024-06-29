import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${size(6.25)} 1fr;
  gap: ${size(0.5)};

  ${ProfileCirclePic} {
    grid-column: 1 / 2;
  }
`;

export const Name = styled(_headingBase).attrs(() => ({ as: "div" }))`
  color: var(--c-main);
  font-size: 1rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 500;
  grid-column: 2 / -1;
  align-self: center;
`;
