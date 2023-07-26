import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 12rem;
  background-color: #212529;
  height: auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 0;
    padding: 0;
    padding-bottom: 10px;
  }
`;

export const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContactsContainer = styled.div`
  @media (max-width: 990px) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 20px;
    padding-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  @media (max-width: 990px) {
    width: 40%;
  }
`;
