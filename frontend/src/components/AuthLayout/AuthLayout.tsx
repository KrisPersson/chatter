import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./styled";
import { useState, useEffect } from "react";
import { getUserInfo } from "../../api/user";
import { TBasicRelationship } from "../../types";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  const [userChannels, setUserChannels] = useState<string[]>([]);
  const [userRelationships, setUserRelationships] = useState<
    TBasicRelationship[]
  >([]);
  const refetchState = useAppSelector((state) => state.refetchCtrl.arr);

  async function handleUpdateChanAndRel() {
    const userInfoFromDb = await getUserInfo();
    if (!userInfoFromDb.success) return navigate("/login");
    setUserChannels([...userInfoFromDb.channels]);
    setUserRelationships([...userInfoFromDb.relationships]);
  }

  useEffect(() => {
    handleUpdateChanAndRel();
  }, [refetchState]);

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
