import { Wrapper, Name } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";

type TUserChatItemProps = {
  username: string;
};

export default function UserChatItem({ username }: TUserChatItemProps) {
  return (
    <Wrapper>
      <ProfileCirclePic />
      <Name>@{username}</Name>
    </Wrapper>
  );
}
