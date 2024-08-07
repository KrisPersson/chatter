import { useState, useEffect } from "react";
import styled from "styled-components";
import { createChannel, getAllChannels } from "../../api/channel";
import { TChannel } from "../../types";
import { ErrorText } from "../../styled-components/ErrorText";
import { SearchInput, TextLabel } from "../../styled-components/TextInput";
import { size } from "../../utils/helpers";
import { Button, UtilityBtn } from "../../styled-components/Button";
import SvgIcon from "../../components/SvgIcon/SvgIcon";
import { TModes } from "./Channels";
import { useAppDispatch } from "../../app/hooks";
import { update } from "../../features/reFetchControl/reFetch-slice";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding-block: var(--main-gutter);
  display: grid;
  grid-template-rows: auto ${size(4)} auto 1fr;

  ${TextLabel} {
    font-size: 0.75rem;
    grid-row: 1 / 2;
  }

  ${UtilityBtn} {
    position: absolute;
    right: 0;
    top: 0;

    @media (min-width: 900px) {
      right: ${size(3)};
      top: unset;
    }
  }

  ${SearchInput} {
    max-width: ${size(37.5)};
  }

  ${Button} {
    font-size: 1.5rem;
    grid-row: 3 / span 1;
    align-self: center;
    max-width: ${size(37.5)};
  }

  ${ErrorText} {
    grid-row: 2 / 3;
    align-self: center;
  }
`;

type TCreateChannelProps = {
  setMode: (mode: TModes) => void;
};

export default function CreateChannelMode({ setMode }: TCreateChannelProps) {
  const [input, setInput] = useState("");
  const [channelNamesInDb, setChannelNamesInDb] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  async function fetchChannels() {
    const { channels } = await getAllChannels();
    setChannelNamesInDb([...channels.map((chan: TChannel) => chan.name)]);
  }

  useEffect(() => {
    fetchChannels();
  }, []);

  async function handleCreate(channelName: string) {
    if (channelName.length < 3) return;
    if (channelNamesInDb.includes(input)) return;
    await createChannel(channelName);
    dispatch(update());
    setMode("");
  }

  return (
    <Wrapper>
      <UtilityBtn title="Back" onClick={() => setMode("")}>
        <SvgIcon imgSrc={"back-arrow.svg"} />
      </UtilityBtn>
      <TextLabel>
        CHANNEL NAME
        <SearchInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </TextLabel>
      {channelNamesInDb.includes(input) && (
        <ErrorText>
          There is already an existing channel with this name.
        </ErrorText>
      )}
      <Button
        disabled={channelNamesInDb.includes(input) || input.length < 3}
        onClick={() => handleCreate(input)}
        $primary
      >
        Create Channel
      </Button>
    </Wrapper>
  );
}
