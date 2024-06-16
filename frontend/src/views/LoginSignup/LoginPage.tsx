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
import { user } from "../../api/signup";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [badLogin, setBadLogin] = useState("");

  async function handleSubmit() {
    event?.preventDefault();
    if (username.length < 3 || password.length < 8) {
      setBadLogin("Wrong username/password combination.");
      return;
    }
    const submitPayload = {
      username,
      password,
    };

    const loginAttempt = await user(submitPayload, "login");
    if (loginAttempt.success === false) {
      setBadLogin(loginAttempt.message);
      return;
    }
    localStorage.setItem("userToken", loginAttempt.token);
    navigate("/dashboard");
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
        {badLogin && username && password && (
          <ErrorText>
            {badLogin || "Wrong username/password combination."}
          </ErrorText>
        )}
        <Button $primary>Log in</Button>
        <BottomLine>
          No account? Sign up <StyledLink to="/signup">here!</StyledLink>
        </BottomLine>
      </Form>
    </Main>
  );
}
