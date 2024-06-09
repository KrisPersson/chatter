import styled from "styled-components";

const _buttonBase = styled.button`
  border: none;
  margin: 0;
  border-radius: 100vmax;
  font-size: 1.5rem;
  padding: 0.5em 1.5em;
  min-width: 100%;

  @media (min-width: 600px) {
    min-width: fit-content;
    font-size: 2rem;
  }
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
