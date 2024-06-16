import styled from "styled-components";
import { size } from "../../utils/helpers";

const _inputBase = styled.input`
  margin: 0;
  background: var(--c-background-darker);
  color: var(--c-main);
  border: 1px solid var(--c-background-lighter);
  font-family: var(--font-family);
  padding: ${size(1)} ${size(1.5)};
  font-size: 1.25rem;
  outline: none;
`;

export const SearchInput = styled(_inputBase).attrs({ type: "text" })``;
export const UsernameInput = styled(_inputBase).attrs({ type: "text" })``;
export const PasswordInput = styled(_inputBase).attrs({ type: "password" })``;
export const TextLabel = styled.label`
  font-size: 1rem;
  color: var(--c-darker);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: ${size(0.5)};
  font-family: var(--font-family);
`;
