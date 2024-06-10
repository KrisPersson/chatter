import styled from "styled-components";
import { size } from "../../utils/helpers";
import { Button } from "../../styled-components/Button";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${size(2)};
  background: var(--c-background-darker);
  max-width: ${size(35)};
  min-height: 500px;
  padding: ${size(4)};
  border-radius: ${size(2)};

  @media (min-width: 600px) {
    padding: ${size(6)} ${size(4)} ${size(4)} ${size(4)};
  }

  ${Button} {
    margin-top: auto;
    margin-bottom: ${size(1)};
    font-size: 1.5rem;
  }
`;
