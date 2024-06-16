import { HeaderWrapper, ContentWrapper } from "./styled";
import { Heading } from "./styled";
import { ProfileCirclePic } from "../../styled-components/ProfileCirclePic";

export default function Header() {
  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Heading>Chatter</Heading>
        <ProfileCirclePic $big />
      </ContentWrapper>
    </HeaderWrapper>
  );
}
