import { HeaderWrapper, ContentWrapper } from "./styled";
import { ProfileCircleWrapper } from "../../styled-components/ProfileCirclePic/index";
import { Heading } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";
import UserModal from "../UserModal/UserModal";
import { useState } from "react";
import { TOnlineStatusProp } from "../../types/index";
import { OnlineStatusCircle } from "../../styled-components/OnlineStatusCircle";
import { useNavigate } from "react-router-dom";

type THeaderProps = {
  onlineStatus: TOnlineStatusProp;
};

export default function Header({ onlineStatus }: THeaderProps) {
  const username = localStorage.getItem("username") || "";
  const [showUserModal, setShowUserModal] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Heading onClick={() => navigate("/dashboard")}>Chatter</Heading>
        <ProfileCircleWrapper>
          <ProfileCirclePic
            $big
            title={username}
            onClick={() => setShowUserModal((prev) => !prev)}
            style={{ opacity: showUserModal ? "0.7" : "1" }}
          />
          <OnlineStatusCircle $status={onlineStatus} />
        </ProfileCircleWrapper>
      </ContentWrapper>
      {showUserModal && (
        <UserModal
          onlineStatus={onlineStatus}
          username={username}
          setShowUserModal={setShowUserModal}
        />
      )}
    </HeaderWrapper>
  );
}
