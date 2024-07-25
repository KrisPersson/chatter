import { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllUsers } from "../../api/user";
import { TUser } from "../../types";
import { ErrorText } from "../../styled-components/ErrorText";
import { SearchInput, TextLabel } from "../../styled-components/TextInput";
import { size } from "../../utils/helpers";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Button, UtilityBtn } from "../../styled-components/Button";
import { Table, THead, TBody, Th, Tr, Td } from "../../styled-components/Table";
import SvgIcon from "../../components/SvgIcon/SvgIcon";
import UserChatItem from "../../components/UserChatItem/UserChatItem";
import { TModes } from "./Users";
import { useAppDispatch } from "../../app/hooks";
import { update } from "../../features/reFetchControl/reFetch-slice";
import { useNavigate } from "react-router-dom";
import { createOrGetRelationship } from "../../api/relationship";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  padding-block: var(--main-gutter);
  overflow-y: auto;

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

type TFindUserProps = {
  setMode: (mode: TModes) => void;
};

export default function FindUserMode({ setMode }: TFindUserProps) {
  const [searchInput, setSearchInput] = useState("");
  const [usersInDb, setUsersInDb] = useState<TUser[]>([]);
  const [showUserModal, setShowUserModal] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "";

  async function fetchUsers() {
    const request = await getAllUsers();
    const users: TUser[] = request.users;
    setUsersInDb([...users.filter((user) => user.username !== username)]);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  const searchResults = searchInput
    ? usersInDb.filter((item) => item.username.includes(searchInput))
    : usersInDb;

  const searchItems = searchResults.map((item) => {
    return (
      <Tr key={item.username} onClick={() => setShowUserModal(item.username)}>
        <Td>
          <UserChatItem users={[item.username]} />
        </Td>
      </Tr>
    );
  });

  function resetUserModal() {
    setShowUserModal("");
  }

  async function handleDm(receiverUsername: string) {
    const { relationshipId } = await createOrGetRelationship([
      receiverUsername,
    ]);
    dispatch(update());
    navigate(`/chat?dm=${relationshipId}`);
  }

  const selectedUser = showUserModal
    ? usersInDb.find((user) => user.username === showUserModal)
    : null;

  return (
    <Wrapper>
      {showUserModal && (
        <ModalWindow
          closeHandler={resetUserModal}
          heading={`@${showUserModal}`}
        >
          <Table>
            <THead>
              <Tr>
                <Th>MEMBER SINCE</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>
                  {selectedUser?.memberSince
                    .toLocaleString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </Td>
              </Tr>
            </TBody>
          </Table>
          {selectedUser?.username === username ? (
            <Button
              onClick={() => navigate("dashboard")}
              title="Go to Dashboard"
            >
              GO TO DASHBOARD
            </Button>
          ) : (
            <Button
              $primary
              onClick={() => handleDm(selectedUser?.username || "")}
              title="Send message"
            >
              SEND MESSAGE
            </Button>
          )}
        </ModalWindow>
      )}
      <UtilityBtn title="Go back" onClick={() => setMode("")}>
        <SvgIcon imgSrc={"back-arrow.svg"} />
      </UtilityBtn>
      <TextLabel>
        SEARCH USERS
        <SearchInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
        />
      </TextLabel>
      <Table>
        <THead>
          <Tr>
            <Th>USERNAME</Th>
          </Tr>
        </THead>
        <TBody>
          {searchItems.length > 0 ? (
            searchItems
          ) : (
            <Tr>
              <Td>
                <ErrorText>Found no users</ErrorText>
              </Td>
            </Tr>
          )}
        </TBody>
      </Table>
    </Wrapper>
  );
}
