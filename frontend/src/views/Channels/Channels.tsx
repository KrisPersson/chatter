import { styled } from "styled-components";
import { useState } from "react";
import { Header, Heading, Wrapper, ContentWrapper } from "./styled";
import { Button } from "../../styled-components/Button";
import FindChannelMode from "./FindChannelMode";
import CreateChannelMode from "./CreateChannelMode";
import { capitalize } from "../../utils/helpers";

export type TModes = "find" | "create" | "";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  & > * {
    font-size: 1.5rem;
  }
  @media (min-width: 900) {
    flex-direction: row;
  }
`;

export default function Channels() {
  const [mode, setMode] = useState<TModes>("");

  function clickHandler(mode: TModes) {
    setMode(mode);
  }

  return (
    <Wrapper>
      <Header>
        <Heading>Channels {mode && ` / ${capitalize(mode)}`}</Heading>
      </Header>
      <ContentWrapper>
        {!mode ? (
          <ButtonContainer>
            <Button $primary onClick={() => clickHandler("find")}>
              Find and join
            </Button>
            <Button onClick={() => clickHandler("create")}>Create</Button>
          </ButtonContainer>
        ) : mode === "find" ? (
          <FindChannelMode setMode={clickHandler} />
        ) : mode === "create" ? (
          <CreateChannelMode setMode={clickHandler} />
        ) : (
          ""
        )}
      </ContentWrapper>
    </Wrapper>
  );
}
