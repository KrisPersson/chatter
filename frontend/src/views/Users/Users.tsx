import { styled } from "styled-components";
import { useState } from "react";
import { Header, Heading, Wrapper, ContentWrapper } from "./styled";
import { Button } from "../../styled-components/Button";
import FindUserMode from "./FindUserMode";
import { capitalize } from "../../utils/helpers";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  & > * {
    font-size: 1.5rem;
  }
`;

export type TModes = "find" | "";

export default function Users() {
  const [mode, setMode] = useState<TModes>("");

  function clickHandler(mode: TModes) {
    setMode(mode);
  }

  return (
    <Wrapper>
      <Header>
        <Heading>Users{mode && ` / ${capitalize(mode)}`}</Heading>
      </Header>
      <ContentWrapper>
        {!mode ? (
          <ButtonContainer>
            <Button $primary onClick={() => clickHandler("find")}>
              Find Users
            </Button>
          </ButtonContainer>
        ) : mode === "find" ? (
          <FindUserMode setMode={clickHandler} />
        ) : (
          ""
        )}
      </ContentWrapper>
    </Wrapper>
  );
}
