'use client';

import { ExportOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

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

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <S.SidebarContainer>
      <S.ChatsContainer>
        <Typography style='text' fontSize='20px' color='white'>
          Usuários
        </Typography>
        {users.map((user) => (
          <Contact user={user} key={user.name} />
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
