import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  joinChannel,
  leaveChannel,
  deleteChannel,
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
import { TModes } from "./Channels";
import { useAppDispatch } from "../../app/hooks";
import { update } from "../../features/reFetchControl/reFetch-slice";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding-block: var(--main-gutter);

  ${TextLabel} {
    font-size: 0.75rem;
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
`;

type TFindChannelProps = {
  setMode: (mode: TModes) => void;
};

export default function FindChannelMode({ setMode }: TFindChannelProps) {
  const [searchInput, setSearchInput] = useState("");
  const [channelsInDb, setChannelsInDb] = useState<TChannel[]>([]);
  const [userChannelsInDb, setUserChannelsInDb] = useState<string[]>([]);
  const [showJoinModal, setShowJoinModal] = useState("");
  const [updateLocally, setUpdateLocally] = useState([1]);
  const dispatch = useAppDispatch();

  const username = localStorage.getItem("username") || "";

  async function fetchChannels() {
    const allChannels = await getAllChannels();
    const userChannels = await getUserChannels();

    setChannelsInDb([...allChannels.channels]);
    setUserChannelsInDb([...userChannels.channels.channels]);
  }

  useEffect(() => {
    fetchChannels();
  }, [updateLocally]);

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
    await joinChannel(channelName);
    dispatch(update());
    setUpdateLocally((prev) => [...prev, 1]);
    setShowJoinModal("");
  }

  async function handleLeave(channelName: string) {
    await leaveChannel(channelName);
    dispatch(update());
    setUpdateLocally((prev) => [...prev, 1]);
    setShowJoinModal("");
  }
  async function handleDelete(channelName: string) {
    await deleteChannel(channelName);
    dispatch(update());
    setUpdateLocally((prev) => [...prev, 1]);
    setShowJoinModal("");
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
              onClick={() => handleDelete(selectedChannel?.name || "")}
              $danger
            >
              DELETE CHANNEL
            </Button>
          ) : userChannelsInDb.indexOf(selectedChannel?.name as string) ===
            -1 ? (
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
            <Tr>
              <Td>
                <ErrorText>Found no channels</ErrorText>
              </Td>
            </Tr>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}
