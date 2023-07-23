'use client';

import ChatSidebarMenu from '@/components/custom/ChatsSidebarMenu';
import * as S from './styles';

import { useState } from 'react';
import BaseChatContent from '@/components/custom/BaseChatContent';
import Chat from '@/components/custom/Chat';

export interface UsersProps {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

const users: UsersProps[] = [
  {
    id: 1,
    name: 'Mateus',
    lastName: 'Silva',
    email: 'mateus@gmail.com',
  },
  {
    id: 2,
    name: 'Giovana',
    lastName: 'Gabrielly',
    email: 'giovana@gmail.com',
  },
  {
    id: 3,
    name: 'Juliano',
    lastName: 'Abras',
    email: 'juliano@gmail.com',
  },
];

const Home = () => {
  const [selectedContact, setSelectedContact] = useState<any>();

  return (
    <S.Wrapper>
      <S.ChatContainer>
        <ChatSidebarMenu
          users={users}
          setSelectedContact={setSelectedContact}
        />
        {selectedContact >= 0 ? (
          <Chat user={users[selectedContact]} />
        ) : (
          <BaseChatContent />
        )}
      </S.ChatContainer>
    </S.Wrapper>
  );
};

export default Home;
