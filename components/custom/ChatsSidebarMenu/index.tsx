'use client';

import { ExportOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import * as S from './styles';

import Button from '@/components/core/Button';
import Typography from '@/components/core/Typography';
import { UsersProps } from '@/app/home/page';
import Contact from '../Contact';

interface ChatSidebarMenuProps {
  users: UsersProps[];
}

const ChatSidebarMenu = ({ users }: ChatSidebarMenuProps) => {
  const router = useRouter();

  const [selectedChat, setSelectedChat] = useState<Number>();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <S.SidebarContainer>
      <S.ChatsContainer>
        <Typography style='text' fontSize='20px' color='white'>
          Usuários
        </Typography>
        {users.map((user, index) => (
          <Contact
            user={user}
            key={index}
            selected={selectedChat === index}
            setSelectedChat={() => setSelectedChat(index)}
          />
        ))}
      </S.ChatsContainer>

      <Button danger={true} onClick={handleLogout}>
        <ExportOutlined />
        <span>Sair</span>
      </Button>
    </S.SidebarContainer>
  );
};

export default ChatSidebarMenu;
