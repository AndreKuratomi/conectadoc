import styled from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* 
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */

  @media screen and (min-width: 1024px) {
    /* flex-direction: row;
    justify-content: space-around;
    align-items: center; */
  }
`;

export const IndicadoresContent = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 30rem;

  @media screen and (min-width: 1024px) {
    width: 40rem;
  }
`;
