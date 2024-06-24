import { HeaderWrapper, ContentWrapper } from "./styled";
import { Heading } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";
import UserModal from "../UserModal/UserModal";
import { useState } from "react";
import { TOnlineStatusProp } from "../../types/index";

type THeaderProps = {
  onlineStatus: TOnlineStatusProp;
  memberSince: null | string;
};

export default function Header({ onlineStatus, memberSince }: THeaderProps) {
  const username = localStorage.getItem("username") || "";
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Heading>Chatter</Heading>
        <ProfileCirclePic
          $big
          title={username}
          onClick={() => setShowUserModal((prev) => !prev)}
          style={{ opacity: showUserModal ? "0.7" : "1" }}
        />
      </ContentWrapper>
      {showUserModal && (
        <UserModal
          onlineStatus={onlineStatus}
          username={username}
          memberSince={memberSince}
        />
      )}
    </HeaderWrapper>
  );
}
