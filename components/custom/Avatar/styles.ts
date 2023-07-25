import styled from 'styled-components';

export const ContactAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #0088cc;
  border-radius: 999px;
  font-size: 24px;
  color: white;

  @media (max-width: 990px) {
    width: 2rem;
    height: 2rem;
    font-size: 20px;
  }
`;
