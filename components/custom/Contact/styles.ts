import styled from 'styled-components';

interface ContactContainerProps {
  selected: boolean;
}

export const ContactContainer = styled.div<ContactContainerProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 0.5rem;
  border-radius: 10px;
  align-items: center;
  justify-content: start;
  background-color: ${({ selected }) => (selected ? '#D9D9D9' : 'transparent')};
`;

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
`;
