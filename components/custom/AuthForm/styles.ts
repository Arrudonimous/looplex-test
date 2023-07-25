import styled from 'styled-components';

export const AuthFormContainer = styled.div`
  align-items: center;
  background-color: #1d2632;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  padding: 2rem;
  width: 100%;

  @media (max-width: 990px) {
    height: 100vh;
  }
`;

export const AuthFormFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
