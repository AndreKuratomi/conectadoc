import { Header } from "../../components/Header";
import HomeImg1 from "../../assets/imgs/HomeImg1.svg";

import { HomeContainer, Image, TextContent } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <TextContent>
          <h2>Bem-vindo à KenzieDoc!</h2>
          <p>Lorem ipsum dolor sicut amet</p>
        </TextContent>
        <figure>
          <Image src={HomeImg1} alt="HomeImg1" />
          <figcaption>HomeImg1</figcaption>
        </figure>
      </HomeContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
