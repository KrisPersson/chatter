import styled from "styled-components";
import { size } from "../../utils/helpers";

export const Img = styled.img`
  margin: 0;
  height: ${size(2.75)};
  width: ${size(2.75)};
  display: block;
`;

export default function SvgIcon({
  imgSrc,
  alt,
  clickHandler,
}: {
  imgSrc: string;
  alt?: string;
  clickHandler?: () => void;
}) {
  const url = `/icons/${imgSrc}`;
  return (
    <Img
      src={url}
      alt={alt}
      onClick={clickHandler}
      style={{ cursor: clickHandler ? "pointer" : "default" }}
    />
  );
}
