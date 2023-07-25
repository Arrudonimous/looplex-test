'use client';
import { useEffect, useState } from 'react';
import * as S from './styles';
import BaseChatContent from '@/components/custom/BaseChatContent';
import Chat from '@/components/custom/Chat';
import ChatSidebarMenu from '@/components/custom/ChatsSidebarMenu';
import pb from '@/lib/pocketbase';
import { useRouter } from 'next/navigation';

export interface UsersProps {
  id: number;
  name: string;
  email: string;
}

const Home = () => {
  const [currentChatId, setCurrentChatId] = useState<string>();
  const [currentChatMessages, setCurrentChatMessages] = useState<any>();
  const [loggedUser, setLoggedUser] = useState<any>();
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [users, setUsers] = useState<any>();
  const router = useRouter();

  const getCurrentChatMessages = (index: number) => {
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
      pb.collection('chats').subscribe(currentChat?.id, function (e) {
        setCurrentChatMessages(e.record.messages);
      });
    }

    setCurrentChatMessages(currentChat?.messages);
    setCurrentChatId(currentChat?.id);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof EventSource !== 'undefined') {
      const eventSource = new EventSource('https://pocketbase-looplex.fly.dev');

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
        } else {
          router.push('/');
        }
      };

      pb.collection('users').subscribe('*', function (e) {
        fetchUsers();
      });

      fetchUsers();

      return () => {
        eventSource.close();
      };
    } else {
      console.log('Error');
    }
  }, []);

  return (
    <S.Wrapper>
      <S.ChatContainer>
        <ChatSidebarMenu
          users={users}
          setSelectedContact={getCurrentChatMessages}
        />
        {selectedContact !== null ? (
          <Chat
            user={users[selectedContact]}
            messages={currentChatMessages}
            chatId={currentChatId}
          />
        ) : (
          <BaseChatContent />
        )}
      </S.ChatContainer>
    </S.Wrapper>
  );
};

export default Home;
