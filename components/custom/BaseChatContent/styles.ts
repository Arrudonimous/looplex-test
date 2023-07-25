import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #d9d9d9;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  flex-direction: column;
  padding: 50px;
  font-size: 32px;
  text-align: center;

  @media (max-width: 990px) {
    .logoImage {
      width: 10rem !important;
      height: 3.5rem !important;
    }
    font-size: 24px !important;
  }
`;
