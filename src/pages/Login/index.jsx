import { Header } from "../../components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <main>{/* LoginContainer */}
        <section>{/* LoginContent */}
          <article>
            <h2>Login</h2>
            <FormLogin />
            <p>Não possui conta? Então vamos para o Cadastro!</p>
          </article>
          <article>
            <figure>
              <img src={} alt=""/>
              <figcaption></figcaption>
            </figure>
          </article>
        </section>
      </main>
    </>
  );
};

export default Login;
