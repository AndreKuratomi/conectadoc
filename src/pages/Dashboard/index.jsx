import { Header } from "../../components/Header";

import { DashboardContainer, IndicadoresContent } from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <DashboardContainer>
        {/*  */}
        <IndicadoresContent>
          {/*  */}
          <article>
            <h2>Indicador1: Total de atendimentos para o dia</h2>
          </article>
          <article>
            <h2>Indicador2: Total de agendamentos cancelados</h2>
          </article>
          {/* <article>
            <h2>Indicador3: ?</h2>
          </article> */}
        </IndicadoresContent>
        <section>
          {/* SchedulesContent */}
          <article>
            <h2>Agendamentos para hoje</h2>
            <p>Conferir agendamento completo da semana e mês por aqui!</p>
            {/* link para página schedules */}
          </article>
          <article>
            <h2>Prontuários</h2>
            <p>Conferir os prontuários de cada paciente aqui!</p>
            {/* link para página schedules */}
          </article>
          <article>
            <h3>Pacientes agendados para hoje!</h3>
            {/* se não tiver nenhum, "Nenhum agendamento para hoje! */}
            <p>
              (Fazer aqui um carrossel???) então schedules será um componente?
            </p>
          </article>
        </section>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
