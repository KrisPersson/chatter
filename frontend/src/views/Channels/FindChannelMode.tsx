import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { _headingBase } from "../../styled-components/Headings";

import { SearchInput, TextLabel } from "../../styled-components/TextInput";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding: var(--main-gutter);
`;

const Table = styled.table``;
const Th = styled(_headingBase).attrs({ as: "th" })`
  color: var(--c-darker);
  font-weight: 400;
`;
const Td = styled(_headingBase).attrs({ as: "td" })`
  color: var(--c-main);
  font-weight: 400;
`;

type TFindChannelProps = {
  setMode: (mode: string) => void;
};

export default function FindChannelMode({ setMode }: TFindChannelProps) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const username = localStorage.getItem("username") || "";

  return (
    <Wrapper>
      <TextLabel>
        SEARCH CHANNELS
        <SearchInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
        />
      </TextLabel>
      <Table>
        <thead>
          <tr>
            <Th>CHANNEL NAME</Th>
            <Th>FOUNDER</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>CHANNEL NAME</Td>
            <Td>FOUNDER</Td>
          </tr>
        </tbody>
      </Table>
      <button onClick={() => setMode("")}>STANG X</button>
    </Wrapper>
  );
}
