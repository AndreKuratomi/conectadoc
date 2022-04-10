import styled from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
  }
`;

export const IndicatorsContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15rem;

  article {
    margin-top: 1rem;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0 5rem;
  }
`;

export const SchedulesContent = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 7rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Article = styled.article`
  border: solid #000 1px;
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1rem;

  p {
    margin: 1rem 0;
  }
`;

export const SchedulesList = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 7rem;

    select {
      margin: 1rem 10rem;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      flex-direction: row;

      select {
        margin: 0;
      }
    }
  }
`;
