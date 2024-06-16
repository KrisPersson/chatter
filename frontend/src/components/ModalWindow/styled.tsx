import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";
import { Button, UtilityBtn } from "../../styled-components/Button";
import { Th } from "../../styled-components/Table";

export const Wrapper = styled.dialog`
  min-width: 100%;
  background: var(--c-background-default);
  display: grid;
  grid-template-rows: ${size(4.5)} auto;
  border: none;
  border: 2px solid var(--c-background-lighter);
  z-index: 2;

  ${UtilityBtn} {
    grid-row: 1 / 2;
    justify-self: right;
    max-height: 22px;
  }
`;

export const Inner = styled.div`
  background: var(--c-background-darker);
  border-radius: ${size(2)} ${size(2)} 0 0;
  grid-row: 2 / -1;
  padding: ${size(2)};
`;

export const Heading = styled(_headingBase)`
  color: var(--c-darker);
  font-size: 1.25rem;
  margin-bottom: ${size(1.5)};
`;

export const Header = styled.header`
  border-bottom: 1px solid var(--c-background-default);
`;

export const ContentWrapper = styled.div`
  padding-block: ${size(2)};

  ${Button} {
    font-size: 1rem;
    margin-block-start: ${size(1)};
  }
  ${Th} {
    font-size: 0.75rem;
  }
`;
