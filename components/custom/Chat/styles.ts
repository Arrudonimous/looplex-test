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

  @media (max-width: 990px) {
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 0;
    height: auto;
    border: 0;
    border-top: 1px solid white;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 990px) {
    font-size: 12px !important;
  }
`;
export const EmailContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 990px) {
    .mailIcon {
      font-size: 20px !important;
    }
  }
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

  @media (max-width: 990px) {
    border-radius: 0;
    padding: 0;
    padding-top: 10px;
  }
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
  width: 100%;

  @media (max-width: 990px) {
    height: 35rem;
  }

  scrollbar-width: thin;
  scrollbar-color: #555555 #f1f1f1;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555555;
  }

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
  align-self: ${({ isMine }) => (isMine ? 'end' : 'start')};
  background-color: ${({ isMine }) => (isMine ? '#1D2632' : '#D9D9D9')};
  padding: 0.5rem;
  border-radius: 0.5rem;

  @media (max-width: 990px) {
    width: 15rem;
    margin-right: ${({ isMine }) => (isMine ? '10px' : '0')};
    margin-left: ${({ isMine }) => (isMine ? '0' : '10px')};
  }
`;
