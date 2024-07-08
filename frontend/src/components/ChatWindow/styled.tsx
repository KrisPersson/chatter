import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";
import { ChatMemberColumnWrapper } from "./ChatMembersColumn";

export const Wrapper = styled.article<{
  $isDm?: boolean;
}>`
  min-width: 100%;
  min-height: 100%;
  max-height: calc(100vh - 228px);
  background: var(--c-background-default);

  display: grid;
  grid-template-rows: 50px 1fr 32px;
  grid-template-columns: ${(props) => (props.$isDm ? "1fr" : "1fr 70px")};

  @media (min-width: 900px) {
    grid-template-columns: ${(props) => (props.$isDm ? "1fr" : "1fr 300px")};
  }

  ${ChatMemberColumnWrapper} {
    grid-row: 1/ -2;
    grid-column: 2 / -1;
    margin: var(--ignore-gutter);
    margin-left: unset;

    @media (min-width: 900) {
      grid-row: 1/ -2;
      grid-column: 2 / -1;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 228px);
`;

export const Header = styled.header<{
  $isDm?: boolean;
}>`
  border-bottom: 1px solid var(--c-background-darker);
  padding-bottom: var(--main-gutter);
  margin-right: ${(props) => (props.$isDm ? "unset" : "var(--main-gutter)")};
  grid-column: ${(props) => (props.$isDm ? "1 / -1" : "1 / -2")};
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
  grid-column: 1 / -1;
`;

export const ChatFeed = styled.ul`
  padding-left: 0;
  margin: 0;
  padding-block: ${size(1.5)};
  padding-right: var(--main-gutter);
  list-style: none;
  max-height: calc(100vh - 228px);
  max-width: calc(100% - var(--main-gutter));
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  overflow-y: auto;

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
  width: 100%;
  max-width: calc(100% - 70px);
  overflow: auto;
  height: 100%;
  min-height: 56px;
  outline: none;
  border: none;
  word-wrap: break-word;
  word-break: break-all;
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
