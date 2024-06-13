import styled from "styled-components";
import { size } from "../../utils/helpers";

export const ProfileCirclePic = styled.div<{ $big?: boolean }>`
  background: var(--c-primary-default);
  width: ${(props) => (props.$big ? size(7) : size(6.25))};
  height: ${(props) => (props.$big ? size(7) : size(6.25))};
  border-radius: 100vmax;
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    border-radius: 100vmax;
    left: 15px;
    top: 14px;
    display: block;
    position: absolute;
    width: ${size(2.5)};
    height: ${size(2.75)};
    background: var(--c-lighter);
    z-index: 5;
  }
  &:after {
    content: "";
    border-radius: 100vmax;
    top: ${size(4.5)};
    display: block;
    position: absolute;
    width: ${size(6.25)};
    height: ${size(3.25)};
    background: var(--c-lighter);
    z-index: 5;
  }
`;
