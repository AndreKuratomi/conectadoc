import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { FormLogin } from "../../components/FormLogin";

import { LoginContainer, LoginContent, Image } from "./styles";

import loginImg from "../../assets/imgs/loginImg.svg";

const Login = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <h2>Login</h2>
          <FormLogin />
          <div>
            <p>Não possui conta?</p>{" "}
            <p>
              Então vamos para o <Link to="/signup">Cadastro!</Link>
            </p>
          </div>
        </LoginContent>

        <figure>
          <Image src={loginImg} alt="loginImg" />
          <figcaption>loginImg</figcaption>
        </figure>
      </LoginContainer>
    </>
  );
};

export default Login;
