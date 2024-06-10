import styled from "styled-components";
import { Form } from "../../views/LoginSignup/form";
import { size } from "../../utils/helpers";

export const Main = styled.main`
  max-height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-rows: ${size(2)} auto 1fr ${size(2)};
  grid-template-columns: ${size(2)} 1fr ${size(2)};
  row-gap: 0;

  @media (min-width: 1200px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 10vw repeat(2, 1fr) 10vw;
  }

  ${Form} {
    grid-row: 3 / -3;
    grid-column: 2 / -2;
    margin-inline: auto;
    min-width: 280px;
    min-height: 505px;
    align-self: flex-start;

    @media (min-width: 1200px) {
      grid-row: 3 / -2;
      grid-column: 3 / -2;
      align-self: center;
    }
  }
`;
