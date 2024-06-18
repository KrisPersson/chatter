import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";

export const Wrapper = styled.article`
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;

  background: var(--c-background-default);

  display: grid;
  grid-template-rows: 50px 1fr 56px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 290px);
`;

export const Header = styled.header`
  border-bottom: 1px solid var(--c-background-darker);
  padding-bottom: var(--main-gutter);
`;

export const UserFooterContainer = styled.footer`
  background: var(--c-black);
  margin: auto var(--ignore-gutter) var(--ignore-gutter) var(--ignore-gutter);
  min-width: 100%;
  min-height: 56px;
  // bottom: 0;
  // left: 0;
  // right: 0;
  z-index: 6;
  grid-row: 3 / -1;
`;

export const ChatFeed = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
  max-height: calc(100vh - 203px);
  overflow-y: auto;
  grid-row: 2 / span 1;

  & > * {
    margin-block: ${size(1.5)};
  }
`;

export const Form = styled.form`
  min-width: 100%;
  min-height: 56px;
  display: flex;
  margin: 0;
`;

export const TextInput = styled.input`
  min-width: 100%;
  height: 100%;
  min-height: 56px;
  outline: none;
  border: none;
  background: var(--c-background-darker);
  color: var(--c-lighter);
  font-size: 1rem;
  padding-inline: ${size(1.5)};
`;

export const Heading = styled(_headingBase).attrs(() => ({ as: "h2" }))`
  color: var(--c-darker);
  font-size: 1.5rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 400;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;