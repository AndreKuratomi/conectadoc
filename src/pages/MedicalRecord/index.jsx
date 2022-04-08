const Schedules = () => {
  return (
    <>
      <Header />
      <main>
        {/* SchedulesContainer */}
        <section>
          <h2>Prontuário</h2>
          {/* IndicadorContent */}
          <article>
            <h2>Subjetiva</h2>
            <p>Problema</p> {/*ver de usar aquela listinha */}
            <p>Situação</p>
            <check>Ativo</check> <check>Inativo</check>
            <span>Alguma coisa aqui para fazer uma checagem em 2 botões</span>
            <textarea></textarea>
          </article>
          <article>
            <h2>Objetiva</h2>
            <p>Problema</p> {/*ver de usar aquela listinha */}
            <p>Situação</p>
            <check>Ativo</check> <check>Inativo</check>
            <span>Alguma coisa aqui para fazer uma checagem em 2 botões</span>
            <textarea></textarea>
          </article>
          <article>
            <h2>Avaliação</h2>
            <p>Problema</p> {/*ver de usar aquela listinha */}
            <p>Situação</p>
            <check>Ativo</check> <check>Inativo</check>
            <span>Alguma coisa aqui para fazer uma checagem em 2 botões</span>
            <textarea></textarea>
          </article>
          <article>
            <h2>Plano</h2>
            <p>Situação</p>
            <check>Ativo</check> <check>Inativo</check>
            <p>Problema</p> {/*ver de usar aquela listinha */}
            <span>Alguma coisa aqui para fazer uma checagem em 2 botões</span>
            <textarea></textarea>
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
