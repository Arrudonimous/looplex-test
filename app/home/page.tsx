'use client';

import ChatSidebarMenu from '@/components/custom/ChatsSidebarMenu';
import * as S from './styles';

import { useEffect, useState } from 'react';
import BaseChatContent from '@/components/custom/BaseChatContent';
import Chat from '@/components/custom/Chat';
import pb from '@/lib/pocketbase';

export interface UsersProps {
  id: number;
  name: string;
  email: string;
}

const Home = () => {
  const [selectedContact, setSelectedContact] = useState<any>();
  const [loggedUser, setLoggedUser] = useState<any>();
  const [users, setUsers] = useState<any>();

  const fetchUsers = async () => {
    const resultList = await pb.collection('users').getFullList();

    const loggedUserData = localStorage.getItem('loggedUser');

    if (loggedUserData) {
      const loggedUserParsed = JSON.parse(loggedUserData);
      setLoggedUser(loggedUserParsed);

      const usersList = resultList.filter(
        (user) => user.id !== loggedUserParsed.id
      );

      setUsers(usersList);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
