import styled from "styled-components";
import { size } from "../../utils/helpers";

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

export const Button = styled(_buttonBase)<{
  $primary?: boolean;
  $danger?: boolean;
}>`
  background: ${(props) =>
    props.$primary
      ? "var(--c-primary-default)"
      : props.$danger
      ? "var(--c-danger)"
      : "transparent"};
  color: ${(props) =>
    props.$primary
      ? "var(--c-background-default)"
      : props.$danger
      ? "var(--c-white)"
      : "var(--c-primary-default)"};
  border: ${(props) =>
    props.$primary
      ? "none"
      : props.$danger
      ? "1px solid var(--c-white)"
      : "1px solid var(--c-primary-default)"};
`;

export const SendBtn = styled.button`
  border: none;
  background: var(--c-primary-default);
  color: var(--c-black);
  margin: 0;
  padding-inline: ${size(2)};
  font-size: 1rem;
`;

export const UtilityBtn = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
`;
