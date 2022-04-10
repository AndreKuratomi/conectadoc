import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { SchedulesCanceled } from "../../components/SchedulesCanceled";
import { SchedulesPerProfessionalList } from "../../components/SchedulesPerProfessionalList";
import { SchedulesForToday } from "../../components/ShedulesForToday";

import {
  Article,
  DashboardContainer,
  IndicatorsContent,
  SchedulesContent,
  SchedulesList,
} from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <DashboardContainer>
        <IndicatorsContent>
          <article>
            <h3>Consultas de hoje:</h3>
            <SchedulesForToday />
          </article>
          <article>
            <h3>Consultas canceladas:</h3>
            <SchedulesCanceled />
          </article>
        </IndicatorsContent>
        <SchedulesContent>
          <Article>
            <h2>Agendamentos</h2>
            <p>
              Conferir agendamento completo da semana e mês clicando{" "}
              <Link to="/schedules">aqui</Link>.
            </p>
          </Article>
          <Article>
            <h2>Prontuários</h2>
            <p>
              Conferir os prontuários de cada paciente clicando{" "}
              <Link to="/medicalrecord">aqui</Link>.
            </p>
          </Article>
        </SchedulesContent>
        <SchedulesList>
          <div>
            <h3>Consultas por profissional:</h3>
            <select name="professionals">
              <option value="default" selected disabled>
                Escolha o profissional:
              </option>
            </select>
          </div>
          <SchedulesPerProfessionalList />
          {/* se não tiver nenhum, "Nenhum agendamento para hoje! */}
          {/* (Fazer aqui um carrossel???) então schedules será um componente? */}
        </SchedulesList>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
