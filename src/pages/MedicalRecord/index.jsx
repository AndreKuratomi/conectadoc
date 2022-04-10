import { Header } from "../../components/Header";

const MedicalRecord = () => {
  return (
    <>
      <Header />
      <main>
        {/* MedicalRecordContainer */}
        <section>
          <h2>Prontuário</h2>
          <select>Selecione paciente</select>
          {/* IndicadorContent */}
          <article>
            <h2>Subjetiva</h2>
            {/*ver de usar aquela listinha */}
            <select>Problema</select>
            <p>Situação</p>
            <select>Ativo/Inativo</select>
            <span>Alguma coisa aqui para fazer uma checagem em 2 botões</span>
            <textarea></textarea>
          </article>
          <article>
            <h2>Objetiva</h2>
            {/*ver de usar aquela listinha */}
            <select>Problema</select>
            <p>Situação</p>
            <select>Ativo/Inativo</select>
            <span>Alguma coisa aqui para fazer uma checagem em 2 botões</span>
            <textarea></textarea>
          </article>
          <article>
            <h2>Avaliação</h2>
            {/*ver de usar aquela listinha */}
            <select>Problema</select>
            <p>Situação</p>
            <select>Ativo/Inativo</select>
            <span>Alguma coisa aqui para fazer uma checagem em 2 botões</span>
            <textarea></textarea>
          </article>
          <article>
            <h2>Plano</h2>
            <p>Situação</p>
            <select>Ativo/Inativo</select>
            {/*ver de usar aquela listinha */}
            <select>Problema</select>
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

export default MedicalRecord;
