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
  const [currentChatMessages, setCurrentChatMessages] = useState<any>();
  const [loggedUser, setLoggedUser] = useState<any>();
  const [users, setUsers] = useState<any>();

  const fetchUsers = async () => {
    const resultList = await pb.collection('users').getFullList();

    const loggedUserData = localStorage.getItem('pocketbase_auth');

    if (loggedUserData) {
      const loggedUserParsed = JSON.parse(loggedUserData);
      setLoggedUser(loggedUserParsed);

      const usersList = resultList.filter(
        (user) => user.id !== loggedUserParsed.model.id
      );

      setUsers(usersList);
    }
  };

  const getCurrentChatMessages = (index: any) => {
    setSelectedContact(index);
    const desiredUserChatId = users[index].id;
    fetchMessages(desiredUserChatId);
  };

  const fetchMessages = async (desiredUserChatId: any) => {
    const resultList = await pb.collection('chats').getList(1, 50, {
      filter: `user1 = "${loggedUser?.model.id}" ||  user2 = "${loggedUser?.model.id}"`,
    });

    const currentChat = resultList.items.find(
      (chat) =>
        chat.user1 === desiredUserChatId || chat.user2 === desiredUserChatId
    );

    if (currentChat) {
      console.log(currentChat.messages);
    }
    setCurrentChatMessages(currentChat?.messages);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <S.Wrapper>
      <S.ChatContainer>
        <ChatSidebarMenu
          users={users}
          setSelectedContact={getCurrentChatMessages}
        />
        {selectedContact >= 0 ? (
          <Chat user={users[selectedContact]} messages={currentChatMessages} />
        ) : (
          <BaseChatContent />
        )}
      </S.ChatContainer>
    </S.Wrapper>
  );
};

export default Home;
