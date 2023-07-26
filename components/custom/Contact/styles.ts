import styled from 'styled-components';

interface ContactContainerProps {
  selected: boolean;
}

export const ContactContainer = styled.div<ContactContainerProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 90%;
  padding: 0.5rem;
  border-radius: 10px;
  align-items: center;
  justify-content: start;
  background-color: ${({ selected }) => (selected ? '#D9D9D9' : 'transparent')};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  @media (max-width: 990px) {
    gap: 5px;
  }

  :hover {
    cursor: pointer;
  }
`;
