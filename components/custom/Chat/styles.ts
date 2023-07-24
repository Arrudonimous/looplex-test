import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
`;

export const ChatHeader = styled.header`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: #212529;
  border: 1px solid white;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top-right-radius: 10px;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
export const EmailContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: white;
  flex: 1;
  padding: 1rem;
  border: 1px solid white;
  border-bottom-right-radius: 10px;
`;

export const SendMessageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const MessagesContainer = styled.div`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  gap: 1.5rem;
  height: 37rem;

  scrollbar-width: thin;
  scrollbar-color: #555555 #f1f1f1;

  /* Estilo da barra de rolagem */
  &::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
  }

  /* Cor da alça (polegar) da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }

  /* Estilo da pista (trilha) da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

interface MessageProps {
  isMine: boolean;
}

export const Message = styled.div<MessageProps>`
  display: flex;
  width: 22.5rem;
  background-color: blue;
  align-self: ${({ isMine }) => (isMine ? 'end' : 'start')};
  background-color: ${({ isMine }) => (isMine ? '#1D2632' : '#D9D9D9')};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
