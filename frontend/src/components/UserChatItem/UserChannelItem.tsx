import { Wrapper, Name } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";

type TUserChannelItemProps = {
  username: string;
};

export default function UserChannelItem({ username }: TUserChannelItemProps) {
  const ProfilePics = <ProfileCirclePic />;
  const Usernames = <Name>@{username}</Name>;

  return (
    <Wrapper>
      {ProfilePics && ProfilePics}
      {Usernames && Usernames}
    </Wrapper>
  );
}
