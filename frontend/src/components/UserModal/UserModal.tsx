import {
  Wrapper,
  Inner,
  Hr,
  OnlineStatusBtn,
  MemberSinceKey,
  MemberSinceValue,
  ContentWrapper,
  Upper,
  Username,
  SecondRow,
  LogOutButton,
} from "./styled";
import { UtilityBtn } from "../../styled-components/Button";
import SvgIcon from "../SvgIcon/SvgIcon";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";
import { useState } from "react";
import { List } from "../../styled-components/List";
import { OnlineStatusCircle } from "../../styled-components/OnlineStatusCircle";
import { TOnlineStatusProp } from "../../types";
import { capitalize, parseDate } from "../../utils/helpers";
import { updateOnlineStatus } from "../../api/user";
import { useAppDispatch } from "../../app/hooks";
import { update } from "../../features/reFetchControl/reFetch-slice";
import { useNavigate } from "react-router-dom";

type TUserModalProps = {
  username: string;
  onlineStatus: TOnlineStatusProp;
};

const ONLINE_STATUS_ALTERNATIVES: TOnlineStatusProp[] = [
  "online",
  "offline",
  "away",
  "busy",
];

export default function UserModal({ username, onlineStatus }: TUserModalProps) {
  const navigate = useNavigate();
  const [showStatusList, setShowStatusList] = useState(false);
  const dispatch = useAppDispatch();
  const memberSince = localStorage.getItem("memberSince");
  function handleClickSettings() {
    console.log("Clicked settings");
  }
  async function handleClickUpdateStatus(status: TOnlineStatusProp) {
    await updateOnlineStatus(status);
    setShowStatusList(false);
    dispatch(update());
  }
  function handleLogout() {
    localStorage.setItem("username", "");
    localStorage.setItem("userToken", "");
    localStorage.setItem("memberSince", "");
    navigate("/login");
  }

  return (
    <Wrapper>
      <Upper>
        <ProfileCirclePic $big />
        <UtilityBtn title="Open settings" onClick={handleClickSettings}>
          <SvgIcon imgSrc={"settings.svg"} alt="Settings icon" />
        </UtilityBtn>
      </Upper>
      <SecondRow>
        <Username>@{username}</Username>
        <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
      </SecondRow>
      <Inner>
        <OnlineStatusBtn
          title="Change online-status"
          onClick={() => setShowStatusList((prev) => !prev)}
        >
          <OnlineStatusCircle $status={onlineStatus} />
          {capitalize(onlineStatus)}
          <SvgIcon imgSrc="tag.svg" />
        </OnlineStatusBtn>
        <Hr />
        <ContentWrapper>
          {showStatusList ? (
            <List>
              {ONLINE_STATUS_ALTERNATIVES.filter(
                (alt) => alt !== onlineStatus
              ).map((alternative) => (
                <li key={alternative}>
                  <OnlineStatusBtn
                    title={capitalize(alternative)}
                    onClick={() => handleClickUpdateStatus(alternative)}
                  >
                    <OnlineStatusCircle $status={alternative} />
                    {capitalize(alternative)}
                  </OnlineStatusBtn>
                </li>
              ))}
            </List>
          ) : (
            <>
              <MemberSinceKey>MEMBER SINCE</MemberSinceKey>
              <MemberSinceValue>
                {memberSince && parseDate(memberSince)}
              </MemberSinceValue>
            </>
          )}
        </ContentWrapper>
      </Inner>
    </Wrapper>
  );
}
