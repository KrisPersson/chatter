import styled from "styled-components";
import { _headingBase } from "../../styled-components/Headings";
import { SidebarList } from "../../styled-components/SidebarList";
import UserChannelItem from "../UserChatItem/UserChannelItem";
import { size } from "../../utils/helpers";

export const ChatMemberColumnWrapper = styled.section`
  background: var(--c-background-darker);
  padding-inline: var(--main-gutter);
  padding-block: var(--main-gutter);
  position: relative;
`;

const LocalHeading = styled(_headingBase).attrs(() => ({ as: "h3" }))`
  font-size: 0.75rem;
  color: var(--c-darker);
  line-height: 1;
  max-width: fit-content;
  font-weight: 500;
  margin-bottom: ${size(3)};
`;

type TChatMembersColumnProps = {
  members: string[];
};

const username = localStorage.getItem("username");

export default function ChatMembersColumn({
  members,
}: TChatMembersColumnProps) {
  const memberItems = members.map((member) => (
    <UserChannelItem
      username={member + (username === member ? " (you)" : "")}
    />
  ));

  return (
    <ChatMemberColumnWrapper>
      <LocalHeading>CHAT MEMBERS</LocalHeading>
      <SidebarList>{memberItems.length > 0 && memberItems}</SidebarList>
    </ChatMemberColumnWrapper>
  );
}
