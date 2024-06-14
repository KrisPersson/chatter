import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";
import { TMessage } from "../../types";

export const Wrapper = styled.li`
  display: grid;
  min-width: 100%;
  grid-template-rows: 20px 20px auto;
  grid-template-columns: 40px 1fr;
  column-gap: ${size(1)};
`;

export const ChatUserName = styled(_headingBase).attrs(() => ({ as: "div" }))`
  color: var(--c-darker);
  font-size: 1rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 500;
  grid-column: 2 / -1;
  align-self: center;
`;

export const ChatMessage = styled.p`
  color: var(--c-main);
  font-size: 1rem;
  line-height: 1;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  margin: 0;
  align-self: center;
`;

export default function ChatItem({ msg }: { msg: TMessage }) {
  return (
    <Wrapper>
      <ProfileCirclePic style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }} />
      <ChatUserName>@{msg.senderUsername}</ChatUserName>
      <ChatMessage>{msg.textBody}</ChatMessage>
    </Wrapper>
  );
}
