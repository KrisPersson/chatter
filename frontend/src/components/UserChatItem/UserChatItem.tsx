import { Wrapper, Name } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";

type TUserChatItemProps = {
  usernames: string[];
  self?: boolean;
};

export default function UserChatItem({ usernames, self }: TUserChatItemProps) {
  const username = localStorage.getItem("username") || "";
  const filteredUsernames = usernames.filter(
    (user) => user !== username || self
  );

  const ProfilePics = filteredUsernames.map((username, i) => (
    <ProfileCirclePic key={"circlepic-" + i + username} />
  ));
  const Usernames = filteredUsernames.map((username, i) => (
    <Name key={"name-" + i + username}>@{username}</Name>
  ));

  return (
    <Wrapper>
      {ProfilePics.length > 0 && ProfilePics}
      {Usernames.length > 0 && Usernames}
    </Wrapper>
  );
}
