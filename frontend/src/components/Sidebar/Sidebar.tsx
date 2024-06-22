import {
  SidebarWrapper,
  Heading,
  HeadingWrapper,
  ChannelLink,
  Section,
  UserFooterContainer,
  NavLink,
} from "./styled";
import { SidebarList } from "../../styled-components/SidebarList";
import UserChatItem from "../UserChatItem/UserChatItem";
import { TBasicRelationship } from "../../types";
import { useNavigate } from "react-router-dom";

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
          <NavLink to="/channels">+</NavLink>
        </HeadingWrapper>
        <SidebarList>
          {channelListElems.length > 0 && channelListElems}
        </SidebarList>
      </Section>
      <Section>
        <HeadingWrapper>
          <Heading>DIRECT MESSAGES</Heading>
          <NavLink to="/users">+</NavLink>
        </HeadingWrapper>
        <SidebarList>
          {relationshipListElems.length > 0 && relationshipListElems}
        </SidebarList>
      </Section>
      <UserFooterContainer>
        <UserChatItem
          usernames={[localStorage.getItem("username") || ""]}
          self={true}
        />
      </UserFooterContainer>
    </SidebarWrapper>
  );
}
