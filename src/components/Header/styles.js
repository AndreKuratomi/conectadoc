import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10rem;

  a {
    color: #029adf;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.25rem;

  a {
    color: #ffffff;
    background-color: #029adf;
    border-radius: 1rem;
    padding: 0.5rem;
    margin: 0 0.5rem;

    &:hover {
      font-weight: bold;
      transition: 0.4s ease;
    }
  }
`;
