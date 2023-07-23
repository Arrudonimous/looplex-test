import { useState } from 'react';
import { UsersProps } from '@/app/home/page';

import * as S from './styles';

import Avatar from '../Avatar';
import Typography from '@/components/core/Typography';
import { MailOutlined, SendOutlined } from '@ant-design/icons';
import Input from '@/components/core/Input';
import Button from '@/components/core/Button';

interface ChatProps {
  user: UsersProps;
}

const Chat = ({ user }: ChatProps) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    console.log('Enviou');
  };

  return (
    <S.ChatWrapper>
      <S.ChatHeader>
        <S.NameContainer>
          <Avatar name={user.name} />
          <Typography style='text' color='white' fontSize='1.5rem'>
            {user.name} {user.lastName}
          </Typography>
        </S.NameContainer>

        <S.EmailContainer>
          <Typography style='text' color='white' fontSize='1rem'>
            {user.email}
          </Typography>
          <MailOutlined style={{ fontSize: '2.5rem', color: 'white' }} />
        </S.EmailContainer>
      </S.ChatHeader>
      <S.ChatContent>
        oi
        <S.SendMessageContainer>
          <Input
            placeholder='Digite sua mensagem'
            onChange={(e: any) => setMessage(e.target.value)}
          />
          <Button onClick={handleSendMessage}>
            <SendOutlined style={{ fontSize: '1.5rem' }} />
          </Button>
        </S.SendMessageContainer>
      </S.ChatContent>
    </S.ChatWrapper>
  );
};

export default Chat;
