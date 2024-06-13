import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./styled";
import { useNavigate } from "react-router-dom";
import { verifyTokenApi } from "../../api/auth";

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  const auth = verifyTokenApi();
  if (!auth) {
    localStorage.setItem("userToken", "");
    navigate("/login");
  }

  return (
    <Container>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default AuthenticatedLayout;
