import styled from "styled-components";
import { size } from "../../utils/helpers";
import { _headingBase } from "../../styled-components/Headings";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";
import { TMessage } from "../../types";

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${size(0.75)};
`;
export const ChatMessage = styled.p`
  color: var(--c-main);
  font-size: 1rem;
  line-height: 1;

  margin: 0;
`;

export const Wrapper = styled.li`
  display: grid;
  min-width: 100%;
  grid-template-rows: 20px 20px auto;
  grid-template-columns: 40px 1fr;
  column-gap: ${size(1)};
  row-gap: ${size(0.25)};

  ${TopRow} {
    grid-column: 2 / -1;
  }

  ${ChatMessage} {
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }

  ${ProfileCirclePic} {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const ChatUserName = styled(_headingBase).attrs(() => ({ as: "div" }))`
  color: var(--c-darker);
  font-size: 1rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 500;
  align-self: center;
`;

export const DateText = styled(_headingBase).attrs(() => ({ as: "div" }))`
  color: var(--c-darker);
  font-size: 0.75rem;
  line-height: 1;
  max-width: fit-content;
  font-weight: 400;
  align-self: center;
`;

export const Circle = styled.div`
  height: ${size(0.5)};
  width: ${size(0.5)};
  border-radius: 100vmax;
  background: var(--c-inverted);
  align-self: center;
`;

export default function ChatItem({ msg }: { msg: TMessage }) {
  const date = new Date(msg.sentAt || "");
  const sent = date ? date.toLocaleString() : "-";
  return (
    <Wrapper>
      <ProfileCirclePic />
      <TopRow>
        <ChatUserName>@{msg.senderUsername}</ChatUserName>
        <Circle />
        <DateText>{sent}</DateText>
      </TopRow>
      <ChatMessage>{msg.textBody}</ChatMessage>
    </Wrapper>
  );
}
