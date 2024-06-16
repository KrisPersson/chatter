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

type TModes = "find" | "create" | "";

export default function Channels() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<TModes>("");

  const username = localStorage.getItem("username") || "";

  function clickHandler(mode: string) {
    setMode(mode);
  }

  return (
    <Wrapper>
      <Header>
        <Heading>Channels</Heading>
      </Header>
      <ContentWrapper>
        {!mode ? (
          <ButtonContainer>
            <Button $primary onClick={() => clickHandler("find")}>
              Find and join
            </Button>
            <Button>Create</Button>
          </ButtonContainer>
        ) : mode === "find" ? (
          <FindChannelMode setMode={clickHandler} />
        ) : (
          ""
        )}
      </ContentWrapper>
    </Wrapper>
  );
}
