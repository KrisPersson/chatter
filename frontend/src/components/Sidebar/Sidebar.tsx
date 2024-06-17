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
import { TBasicRelationship } from "../../types";
import { useNavigate } from "react-router-dom";

const username = localStorage.getItem("username") || "";
type TSidebarProps = {
  channels: string[];
  relationships: TBasicRelationship[];
};

export default function Sidebar({ channels, relationships }: TSidebarProps) {
  const navigate = useNavigate();
  const channelListElems = channels.map((chan) => {
    return (
      <ChannelLink key={chan} to={`/chat?channel=${chan}`}>
        #{chan}
      </ChannelLink>
    );
  });
  const relationshipListElems = relationships.map((rel) => {
    return <UserChatItem key={rel.id} usernames={rel.usernames} />;
  });
  return (
    <SidebarWrapper>
      <Section>
        <HeadingWrapper>
          <Heading onClick={() => navigate("/channels")}>CHANNELS</Heading>
        </HeadingWrapper>
        <SidebarList>
          {channelListElems.length > 0 && channelListElems}
        </SidebarList>
      </Section>
      <Section>
        <HeadingWrapper>
          <Heading>DIRECT MESSAGES</Heading>
        </HeadingWrapper>
        <SidebarList>
          {relationshipListElems.length > 0 && relationshipListElems}
        </SidebarList>
      </Section>
      <UserFooterContainer>
        <UserChatItem usernames={[username]} self={true} />
      </UserFooterContainer>
    </SidebarWrapper>
  );
}
