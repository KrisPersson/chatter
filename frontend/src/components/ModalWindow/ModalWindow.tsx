import { Wrapper, Inner, Heading, Header, ContentWrapper } from "./styled";
import { UtilityBtn } from "../../styled-components/Button";
import SvgIcon from "../SvgIcon/SvgIcon";

type TModalWindowProps = {
  children: React.ReactNode;
  heading: string;
  closeHandler: () => void;
};

export default function ModalWindow({
  children,
  heading,
  closeHandler,
}: TModalWindowProps) {
  return (
    <Wrapper>
      <UtilityBtn title="Close modal" onClick={closeHandler}>
        <SvgIcon imgSrc={"close.svg"} />
      </UtilityBtn>
      <Inner>
        <Header>
          <Heading>{heading}</Heading>
        </Header>
        <ContentWrapper>{children}</ContentWrapper>
      </Inner>
    </Wrapper>
  );
}
