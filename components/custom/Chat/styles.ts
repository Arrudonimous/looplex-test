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
