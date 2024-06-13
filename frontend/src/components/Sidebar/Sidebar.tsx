import {
  SidebarWrapper,
  Heading,
  HeadingWrapper,
  SidebarList,
  ChannelLink,
  Section,
  UserFooterContainer,
} from "./styled";
import UserChatItem from "../UserChatItem/UserChatItem";

const username = localStorage.getItem("username") || "";

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Section>
        <HeadingWrapper>
          <Heading>CHANNELS</Heading>
        </HeadingWrapper>
        <SidebarList>
          <ChannelLink>#main</ChannelLink>
          <ChannelLink>#main</ChannelLink>
        </SidebarList>
      </Section>
      <Section>
        <HeadingWrapper>
          <Heading>DIRECT MESSAGES</Heading>
        </HeadingWrapper>
        <SidebarList>
          <UserChatItem username="jannelarsson" />
          <UserChatItem username="welma324" />
        </SidebarList>
      </Section>
      <UserFooterContainer>
        <UserChatItem username={username} />
      </UserFooterContainer>
    </SidebarWrapper>
  );
}
