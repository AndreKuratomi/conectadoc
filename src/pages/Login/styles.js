import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const TextContent = styled.section`
  color: #029adf;
  text-align: center;
  margin-top: 1rem;

  h1,
  p {
    margin: 1rem 0;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const Image = styled.img`
  width: 30rem;

  @media screen and (min-width: 1024px) {
    width: 40rem;
  }
`;
