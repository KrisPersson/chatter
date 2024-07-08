import { HeaderWrapper, ContentWrapper, MenuWrapper } from "./styled";
import { ProfileCircleWrapper } from "../../styled-components/ProfileCirclePic/index";
import { Heading } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";
import UserModal from "../UserModal/UserModal";
import { useState } from "react";
import { TOnlineStatusProp } from "../../types/index";
import { OnlineStatusCircle } from "../../styled-components/OnlineStatusCircle";
import { useNavigate } from "react-router-dom";
import SvgIcon from "../SvgIcon/SvgIcon";

type THeaderProps = {
  onlineStatus: TOnlineStatusProp;
  setShowSidebar: () => void;
};

export default function Header({ onlineStatus, setShowSidebar }: THeaderProps) {
  const username = localStorage.getItem("username") || "";
  const [showUserModal, setShowUserModal] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Heading onClick={() => navigate("/dashboard")}>Chatter</Heading>
        <MenuWrapper>
          <SvgIcon
            imgSrc="hamburger.svg"
            alt="Hamburger menu"
            clickHandler={() => setShowSidebar()}
          />
          <ProfileCircleWrapper>
            <ProfileCirclePic
              $big
              title={username}
              onClick={() => setShowUserModal((prev) => !prev)}
              style={{ opacity: showUserModal ? "0.7" : "1" }}
            />
            <OnlineStatusCircle $status={onlineStatus} />
          </ProfileCircleWrapper>
        </MenuWrapper>
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
