import styled from "styled-components";
import { size } from "../../utils/helpers";
import { TOnlineStatusProp } from "../../types/index";

export const OnlineStatusCircle = styled.div<{ $status?: TOnlineStatusProp }>`
  width: ${size(2)};
  height: ${size(2)};
  border-radius: 100vmax;
  background: ${(props) =>
    props.$status === "online"
      ? "var(--c-success)"
      : props.$status === "away"
      ? "var(--c-danger)"
      : props.$status === "offline"
      ? "var(--c-darker)"
      : "var(--c-primary-default)"};
`;
