import styled from "styled-components";
import { size } from "../../utils/helpers";
import { OnlineStatusCircle } from "../OnlineStatusCircle";

export const ProfileCirclePic = styled.div<{ $big?: boolean }>`
  background: var(--c-primary-default);
  width: ${(props) => (props.$big ? size(6.25) : size(5))};
  height: ${(props) => (props.$big ? size(6.25) : size(5))};
  border-radius: 100vmax;
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    border-radius: 100vmax;
    left: ${(props) => (props.$big ? "15px" : "12.5px")};
    top: ${(props) => (props.$big ? "14px" : "11px")};
    display: block;
    position: absolute;
    width: ${(props) => (props.$big ? size(2.5) : size(2))};
    height: ${(props) => (props.$big ? size(2.75) : size(2.25))};
    background: var(--c-lighter);
    z-index: 5;
  }
  &:after {
    content: "";
    border-radius: 100vmax;
    top: ${(props) => (props.$big ? size(4.5) : size(3.65))};
    display: block;
    position: absolute;
    width: ${(props) => (props.$big ? size(6.25) : size(5))};
    height: ${size(3.25)};
    background: var(--c-lighter);
    z-index: 5;
  }
`;

export const ProfileCircleWrapper = styled.div`
  position: relative;
  ${OnlineStatusCircle} {
    border: 2px solid var(--c-black);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 6;
  }
`;
