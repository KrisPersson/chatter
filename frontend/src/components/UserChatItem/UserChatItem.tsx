import { Wrapper, Name } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";

type TUserChatItemProps = {
  users: string[];
  self?: boolean;
  clickUserHandler?: () => void;
  withStatusCircle?: boolean;
};

export default function UserChatItem({
  users,
  self,
  clickUserHandler,
}: TUserChatItemProps) {
  const username = localStorage.getItem("username") || "";
  const filteredUsers = users.filter((user) => user !== username || self);

  const ProfilePics = filteredUsers.map((user, i) => {
    return <ProfileCirclePic title={user} key={user + i} />;
  });
  const Usernames = filteredUsers.map((user, i) => (
    <Name key={"name-" + i + user}>@{user}</Name>
  ));

  return (
    <Wrapper onClick={clickUserHandler}>
      {ProfilePics.length > 0 && ProfilePics}
      {Usernames.length > 0 && Usernames}
    </Wrapper>
  );
}
