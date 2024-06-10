import React, { useState } from "react";

import { Button } from "../../styled-components/Button";
import { useNavigate } from "react-router-dom";
import {
  ContentWrapper,
  HeaderWrapper,
  MainHeader,
  SubHeader,
  Img,
  BottomLine,
  StyledLink,
} from "./styled";
import { Main } from "../../styled-components/FrontpageMain";
import { Form } from "./form";
import {
  UsernameInput,
  PasswordInput,
  TextLabel,
} from "../../styled-components/TextInput";
import { ErrorText } from "../../styled-components/ErrorText";
import { containsNumber } from "../../utils/helpers";

export default function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  async function handleSubmit() {
    event?.preventDefault();
    const submitPayload = {
      username,
      password,
      repeatPassword,
    };
    console.log(submitPayload);
  }

  return (
    <Main>
      <ContentWrapper>
        <HeaderWrapper>
          <MainHeader onClick={() => navigate("/")}>Chatter</MainHeader>
          <SubHeader>Let's chat!</SubHeader>
        </HeaderWrapper>
        <Img src="/logo.png" alt="Chatter logo" />
      </ContentWrapper>
      <Form onSubmit={handleSubmit}>
        <TextLabel>
          USERNAME
          <UsernameInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </TextLabel>
        <TextLabel>
          PASSWORD
          <PasswordInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </TextLabel>
        <TextLabel>
          REPEAT PASSWORD
          <PasswordInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRepeatPassword(e.target.value)
            }
          />
        </TextLabel>
        {username && username.length < 3 ? (
          <ErrorText>Username must be at least 3 characters long.</ErrorText>
        ) : (username && password && password.length < 8) ||
          (username && password && !containsNumber(password)) ? (
          <ErrorText>
            Password must be at least 8 characters long and include at least one
            number
          </ErrorText>
        ) : repeatPassword.length >= 8 && password !== repeatPassword ? (
          <ErrorText>Passwords do not match</ErrorText>
        ) : (
          ""
        )}

        <Button $primary>Sign up</Button>
        <BottomLine>
          Have account? Log in <StyledLink to="/login">here!</StyledLink>
        </BottomLine>
      </Form>
    </Main>
  );
}
