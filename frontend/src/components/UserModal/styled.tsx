import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";
import { Button, UtilityBtn } from "../../styled-components/Button";
import { Th } from "../../styled-components/Table";

export const Wrapper = styled.aside`
  padding: var(--main-gutter);
  background: var(--c-background-default);
  min-width: ${size(40)};
  right: var(--main-gutter);
  top: 98px;
  position: absolute;

  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: ${size(2)};
  border: none;
  border: 2px solid var(--c-background-lighter);
  z-index: 10;

  ${UtilityBtn} {
    grid-row: 1 / 2;
    justify-self: right;
    max-height: 22px;
  }
`;

export const Inner = styled.div`
  background: var(--c-background-darker);
  border-radius: ${size(2)} ${size(2)} 0 0;
  grid-row: 3 / -1;
  padding: ${size(2)};
`;

export const Heading = styled(_headingBase)`
  color: var(--c-darker);
  font-size: 1.5rem;
`;

export const OnlineStatusBtn = styled.button`
  font-family: var(--font-family);
  font-size: 1.125rem;
  border: none;
  color: var(--c-darker);
  background: transparent;
  min-width: 100%;

  display: flex;
  align-items: center;
  gap: ${size(1.5)};
  position: relative;

  & > img {
    position: absolute;
    right: 0;
    transform: scale(0.75);
  }
`;

export const Hr = styled.hr`
  border: 1px solid var(--c-background-default);
`;

export const ContentWrapper = styled.div`
  padding-block: ${size(1)};

  ${Button} {
    font-size: 1rem;
    margin-block-start: ${size(1)};
  }
  ${Th} {
    font-size: 0.75rem;
  }
`;

export const Username = styled(Heading).attrs(() => ({ as: "div" }))`
  font-size: 1.25rem;
  grid-row: 2 / span 1;
`;
export const MemberSinceKey = styled(Heading).attrs(() => ({ as: "div" }))`
  font-size: 0.75rem;
`;

export const MemberSinceValue = styled(Heading).attrs(() => ({ as: "div" }))`
  font-size: 1rem;
`;

export const Upper = styled.div`
  display: flex;
  justify-content: space-between;

  ${Heading} {
    align-self: flex-end;
    margin-bottom: 0;
  }
`;
