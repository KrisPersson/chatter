import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Header,
  Heading,
  Wrapper,
  ContentWrapper,
  ButtonContainer,
} from "./styled";
import { Button } from "../../styled-components/Button";
import FindChannelMode from "./FindChannelMode";
import CreateChannelMode from "./CreateChannelMode";
import { capitalize } from "../../utils/helpers";

export type TModes = "find" | "create" | "";

export default function Channels() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<TModes>("");

  const username = localStorage.getItem("username") || "";

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
