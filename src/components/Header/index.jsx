import { Link, useNavigate } from "react-router-dom";

import { UserLogged } from "../UserLogged";
import { HeaderContainer, LinksContainer } from "./styles";

export const Header = () => {
  // const navigate = useNavigate();
  const auth = "";
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <h1>KenzieDoc</h1>
        </Link>
        {auth ? (
          <UserLogged />
        ) : (
          <LinksContainer>
            <Link to="/login">Login</Link>
            <Link to="/signup">Cadastre-se</Link>
          </LinksContainer>
        )}
      </HeaderContainer>
    </>
  );
};
