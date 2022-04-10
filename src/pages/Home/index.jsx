import { Header } from "../../components/Header";
import register from "../../assets/imgs/register.svg";

import { HomeContainer, Image, TextContent } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <TextContent>
          <h2>Bem-vindo à KenzieDoc!</h2>
          <p>
            Cadastre-se e agende suas consultas de maneira simples e intuitiva
          </p>
        </TextContent>
        <figure>
          <Image src={register} alt="register" />
          <figcaption>register</figcaption>
        </figure>
      </HomeContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
