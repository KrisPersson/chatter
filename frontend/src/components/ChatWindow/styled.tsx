import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";

export const Wrapper = styled.article`
  min-width: 100%;
  min-height: 100%;
  background: var(--c-background-default);
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 210px);
`;

export const Header = styled.header`
  border-bottom: 1px solid var(--c-background-darker);
  padding-bottom: var(--main-gutter);
`;

export const UserFooterContainer = styled.footer`
  background: var(--c-black);
  margin: auto var(--ignore-gutter) var(--ignore-gutter) var(--ignore-gutter);
  position: absolute;
  min-width: 100%;
  min-height: 56px;
  bottom: 0;
  left: 0;
  right: 0;
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

export const SendBtn = styled.button`
  border: none;
  background: var(--c-primary-default);
  color: var(--c-black);
  margin: 0;
  padding-inline: ${size(2)};
  font-size: 1rem;
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
