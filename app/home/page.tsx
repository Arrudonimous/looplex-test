'use client';

import ChatSidebarMenu from '@/components/custom/ChatsSidebarMenu';
import * as S from './styles';

export interface UsersProps {
  name: string;
  lastName: string;
}

const users: UsersProps[] = [
  {
    name: 'Mateus',
    lastName: 'Silva',
  },
  {
    name: 'Giovana',
    lastName: 'Gabrielly',
  },
  {
    name: 'Juliano',
    lastName: 'Abras',
  },
];

const Home = () => {
  return (
    <S.Wrapper>
      <S.ChatContainer>
        <ChatSidebarMenu users={users} />
      </S.ChatContainer>
    </S.Wrapper>
  );
};

export default Home;
