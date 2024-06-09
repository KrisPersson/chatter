import styled from "styled-components";

const _buttonBase = styled.button`
  border: none;
  margin: 0;
  border-radius: 100vmax;
  font-size: 2rem;
  padding: 0.5em 1.5em;
`;

export const Button = styled(_buttonBase)<{ $primary?: boolean }>`
  background: ${(props) =>
    props.$primary ? "var(--c-primary-default)" : "transparent"};
  color: ${(props) =>
    props.$primary
      ? "var(--c-background-default)"
      : "var(--c-primary-default)"};
  border: ${(props) =>
    props.$primary ? "none" : "1px solid var(--c-primary-default)"};
`;
