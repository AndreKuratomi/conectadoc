import { Header } from "../../components/Header";
import HomeImg1 from "../../assets/imgs/HomeImg1.svg";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* HomeContainer */}
        <section>
          <h2>Bem-vindo à KenzieDoc!</h2>
          <p>Lorem ipsum dolor sicut amet</p>
        </section>
        <figure>
          <img src={HomeImg1} alt="HomeImg1" />
          <figcaption>HomeImg1</figcaption>
        </figure>
        {/* <section>
            <article>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sicut amet</p>
                <figure>
                    <img src={} alt=""/>
                    <figcaption></figcaption>
                </figure>
            </article>
            <article>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sicut amet</p>
                <figure>
                    <img src={} alt=""/>
                    <figcaption></figcaption>
                </figure>
            </article>
            <article>
                <h3>LOREM</h3>
                <p>Lorem ipsum dolor sicut amet</p>
                <figure>
                    <img src={} alt=""/>
                    <figcaption></figcaption>
                </figure>
            </article>
        </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
