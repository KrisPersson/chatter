import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  joinChannel,
  leaveChannel,
  getAllChannels,
  getUserChannels,
} from "../../api/channel";
import { TChannel } from "../../types";
import { ErrorText } from "../../styled-components/ErrorText";
import { SearchInput, TextLabel } from "../../styled-components/TextInput";
import { size } from "../../utils/helpers";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Button, UtilityBtn } from "../../styled-components/Button";
import { Table, THead, Th, Tr, Td } from "../../styled-components/Table";
import SvgIcon from "../../components/SvgIcon/SvgIcon";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding: var(--main-gutter);

  ${TextLabel} {
    font-size: 0.75rem;
  }

  ${UtilityBtn} {
    position: absolute;
    right: ${size(3)};
  }

  ${SearchInput} {
    max-width: ${size(37.5)};
  }
`;

type TFindChannelProps = {
  setMode: (mode: string) => void;
};

const { channels } = await getUserChannels();

export default function FindChannelMode({ setMode }: TFindChannelProps) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [channelsInDb, setChannelsInDb] = useState<TChannel[]>([]);
  const [showJoinModal, setShowJoinModal] = useState("");

  const username = localStorage.getItem("username") || "";

  async function fetchChannels() {
    const { channels } = await getAllChannels();
    setChannelsInDb([...channels]);
  }

  useEffect(() => {
    fetchChannels();
  }, []);

  const searchResults = searchInput
    ? channelsInDb.filter((item) => item.name.includes(searchInput))
    : channelsInDb;

  const searchItems = searchResults.map((item) => {
    return (
      <Tr key={item.name} onClick={() => setShowJoinModal(item.name)}>
        <Td>#{item.name}</Td>
        <Td>{item.numMembers}</Td>
      </Tr>
    );
  });

  function resetJoinModal() {
    setShowJoinModal("");
  }

  async function handleJoin(channelName: string) {
    const result = await joinChannel(channelName);
    console.log(result);
  }

  async function handleLeave(channelName: string) {
    const result = await leaveChannel(channelName);
    console.log(result);
  }

  const selectedChannel = showJoinModal
    ? channelsInDb.find((chan) => chan.name === showJoinModal)
    : null;

  return (
    <Wrapper>
      {showJoinModal && (
        <ModalWindow
          closeHandler={resetJoinModal}
          heading={`#${showJoinModal}`}
        >
          <Table>
            <THead>
              <Tr>
                <Th style={{ paddingRight: size(20) }}>FOUNDER</Th>
                <Th>MEMBERS</Th>
              </Tr>
            </THead>
            <tbody>
              <Tr>
                <Td>{selectedChannel?.founder}</Td>
                <Td>{selectedChannel?.numMembers}</Td>
              </Tr>
            </tbody>
          </Table>
          {selectedChannel?.founder === username ? (
            <Button
              onClick={() => handleJoin(selectedChannel?.name || "")}
              $danger
            >
              DELETE CHANNEL
            </Button>
          ) : !channels.includes(selectedChannel?.name) ? (
            <Button
              onClick={() => handleJoin(selectedChannel?.name || "")}
              $primary
            >
              JOIN CHANNEL
            </Button>
          ) : (
            <Button onClick={() => handleLeave(selectedChannel?.name || "")}>
              LEAVE CHANNEL
            </Button>
          )}
        </ModalWindow>
      )}
      <UtilityBtn title="Back" onClick={() => setMode("")}>
        <SvgIcon imgSrc={"back-arrow.svg"} />
      </UtilityBtn>
      <TextLabel>
        SEARCH CHANNELS
        <SearchInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
        />
      </TextLabel>
      <Table>
        <THead>
          <Tr>
            <Th style={{ paddingRight: size(20) }}>CHANNEL NAME</Th>
            <Th>MEMBERS</Th>
          </Tr>
        </THead>
        <tbody>
          {searchItems.length > 0 ? (
            searchItems
          ) : (
            <ErrorText>Found no channels</ErrorText>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}
