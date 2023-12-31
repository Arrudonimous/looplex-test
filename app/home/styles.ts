import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: #1d2632;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const ChatContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 70rem;
  height: 49rem;
  display: flex;

  @media (max-width: 990px) {
    height: 100vh;
    flex-direction: column;
  }
`;
