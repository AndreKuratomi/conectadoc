const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        {/* DashboardContainer */}
        <section>
          {/* IndicadorContent */}
          <article>
            <h2>Indicador1: Total de atendimentos para o dia</h2>
          </article>
          <article>
            <h2>Indicador2: Total de agendamentos cancelados</h2>
          </article>
          <article>
            <h2>Indicador3: ?</h2>
          </article>
        </section>
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
            <p>
              (Fazer aqui um carrossel???) então schedules será um componente?
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
