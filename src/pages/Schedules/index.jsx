import { Header } from "../../components/Header";

const Schedules = () => {
  return (
    <>
      <Header />
      <main>
        {/* SchedulesContainer */}
        <section>
          {/* IndicadorContent */}
          <article>
            <h2>Agenda médica</h2>
          </article>
          <article>
            <button>Semanal</button>
            <button>Mensal</button>
          </article>
        </section>
        <section>
          <h2>Bom, aqui entra o calendário</h2>
        </section>
      </main>
    </>
  );
};

export default Schedules;
