import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./styled";
import { useNavigate } from "react-router-dom";
import { verifyTokenApi } from "../../api/auth";
import { useState, useEffect } from "react";
import { getUserInfo } from "../../api/user";
import { TBasicRelationship } from "../../types";

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  const auth = verifyTokenApi();
  if (!auth) {
    localStorage.setItem("userToken", "");
    navigate("/login");
  }
  const [userChannels, setUserChannels] = useState<string[]>([]);
  const [userRelationships, setUserRelationships] = useState<
    TBasicRelationship[]
  >([]);

  async function handleUpdateChanAndRel() {
    const userInfoFromDb = await getUserInfo();
    if (!userInfoFromDb.success)
      return console.log("Could not fetch", userInfoFromDb.message);
    setUserChannels([...userInfoFromDb.channels]);
    setUserRelationships([...userInfoFromDb.relationships]);
  }

  useEffect(() => {
    handleUpdateChanAndRel();
  }, []);

  return (
    <Container>
      <Header />
      <Sidebar channels={userChannels} relationships={userRelationships} />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default AuthenticatedLayout;
