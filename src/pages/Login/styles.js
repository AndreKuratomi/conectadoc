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

export const LoginContent = styled.article`
  border: solid #000 1px;
  border-radius: 2rem;
  color: #029adf;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  margin: 3rem 15rem;

  p {
    margin: 1rem 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    width: 40rem;
  }
`;
