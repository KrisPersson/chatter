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
import { createOrGetRelationship } from "../../api/relationship";

type TSidebarProps = {
  channels: string[];
  relationships: TBasicRelationship[];
  className: string;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({
  channels,
  relationships,
  className,
  setShowSidebar,
}: TSidebarProps) {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "";
  async function clickUserHandler(otherParties: string[]) {
    const { relationshipId } = await createOrGetRelationship(otherParties);
    navigate(`/chat?dm=${relationshipId}`);
    setShowSidebar(false);
  }

  function navigateAndClose(destination: string) {
    navigate(destination);
    setShowSidebar(false);
  }

  const channelListElems = channels.map((chan) => {
    return (
      <ChannelLink
        key={chan}
        to={`/chat?channel=${chan}`}
        onClick={() => setShowSidebar(false)}
      >
        #{chan}
      </ChannelLink>
    );
  });
  const relationshipListElems = relationships.map((rel) => {
    return (
      <UserChatItem
        key={rel.id}
        users={rel.usernames}
        clickUserHandler={() =>
          clickUserHandler(rel.usernames.filter((user) => user !== username))
        }
      />
    );
  });
  return (
    <SidebarWrapper className={className}>
      <Section>
        <HeadingWrapper>
          <Heading onClick={() => navigateAndClose("/channels")}>
            CHANNELS
          </Heading>
          <NavLink onClick={() => setShowSidebar(false)} to="/channels">
            +
          </NavLink>
        </HeadingWrapper>
        <SidebarList>
          {channelListElems.length > 0 && channelListElems}
        </SidebarList>
      </Section>
      <Section>
        <HeadingWrapper>
          <Heading onClick={() => navigateAndClose("/users")}>
            DIRECT MESSAGES
          </Heading>
          <NavLink onClick={() => setShowSidebar(false)} to="/users">
            +
          </NavLink>
        </HeadingWrapper>
        <SidebarList>
          {relationshipListElems.length > 0 && relationshipListElems}
        </SidebarList>
      </Section>
      <UserFooterContainer>
        <UserChatItem
          users={[localStorage.getItem("username") || ""]}
          self={true}
        />
      </UserFooterContainer>
    </SidebarWrapper>
  );
}
