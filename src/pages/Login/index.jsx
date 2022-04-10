import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { FormLogin } from "../../components/FormLogin";

import loginImg from "../../assets/imgs/loginImg.svg";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        {/* LoginContainer */}
        <section>
          {/* LoginContent */}
          <article>
            <h2>Login</h2>
            <FormLogin />
            <p>
              Não possui conta? Então vamos para o{" "}
              <Link to="/signup">Cadastro!</Link>
            </p>
          </article>
          <article>
            <figure>
              <img src={loginImg} alt="loginImg" />
              <figcaption>loginImg</figcaption>
            </figure>
          </article>
        </section>
      </main>
    </>
  );
};

export default Login;
