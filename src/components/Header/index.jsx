import { Link, useNavigate } from "react-router-dom";

import { UserLogged } from "../userLogged";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Link to="/">
          <h1>KenzieDoc</h1>
        </Link>
        {auth ? (
          <UserLogged />
        ) : (
          <div>
            <button onClick={() => navigate.push("/login")}>Login</button>
            <button onClick={() => navigate.push("/signup")}>
              Cadastre-se
            </button>
          </div>
        )}
      </header>
      {/* fazer lista de headers para ver quando usar cada um? */}
    </>
  );
};
