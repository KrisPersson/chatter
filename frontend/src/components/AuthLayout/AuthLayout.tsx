import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./styled";
import { useState, useEffect } from "react";
import { getUserInfo } from "../../api/user";
import { TBasicRelationship, TOnlineStatusProp } from "../../types";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  const [userChannels, setUserChannels] = useState<string[]>([]);
  const [userRelationships, setUserRelationships] = useState<
    TBasicRelationship[]
  >([]);
  const [userOnlineStatus, setUserOnlineStatus] = useState("offline");
  const [showSidebar, setShowSidebar] = useState(false);
  const refetchState = useAppSelector((state) => state.refetchCtrl.arr);

  async function handleUpdateChanAndRel() {
    const userInfoFromDb = await getUserInfo();
    if (!userInfoFromDb.success) return navigate("/login");
    setUserChannels([...userInfoFromDb.channels]);
    setUserRelationships([...userInfoFromDb.relationships]);
    setUserOnlineStatus(userInfoFromDb.onlineStatus);
  }
  useEffect(() => {
    handleUpdateChanAndRel();
  }, [refetchState]);

  function handleClickShowSidebar() {
    console.log("clicked!");
    setShowSidebar((prev) => !prev);
    console.log(showSidebar);
  }

  return (
    <Container>
      <Header
        onlineStatus={userOnlineStatus as TOnlineStatusProp}
        setShowSidebar={handleClickShowSidebar}
      />
      <Sidebar
        className={showSidebar ? "sidebar--show-mobile" : ""}
        channels={userChannels}
        relationships={userRelationships}
        setShowSidebar={handleClickShowSidebar}
      />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default AuthenticatedLayout;
