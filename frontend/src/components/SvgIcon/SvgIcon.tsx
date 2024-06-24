import styled from "styled-components";
import { size } from "../../utils/helpers";

const Img = styled.img`
  margin: 0;
  height: ${size(2.75)};
  width: ${size(2.75)};
  display: block;
`;

export default function SvgIcon({
  imgSrc,
  alt,
}: {
  imgSrc: string;
  alt?: string;
}) {
  const url = `/icons/${imgSrc}`;
  return <Img src={url} alt={alt} />;
}
