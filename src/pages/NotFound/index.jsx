import notFound from "../../assets/imgs/notFound.svg";
import { Header } from "../../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        {/* NotFoundContainer */}
        <figure>
          <img src={notFound} alt="" />
          <figcaption></figcaption>
        </figure>
        <button>Voltar para o início</button>
      </main>
    </>
  );
};

export default NotFound;
