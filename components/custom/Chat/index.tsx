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
  const myId = 4;

  const handleSendMessage = () => {
    console.log('Enviou');
  };

  const messages = [
    {
      senderId: user.id,
      content:
        'Boa noite, será que podemos marcar uma reunião para amanha durante a tarde ?',
    },
    {
      senderId: user.id,
      content:
        'Tenho interesse em seus projetos pessoais e gostaria de saber se podemos fechar um projeto para desenvolvermos em conjunto. Tenho alguns integrantes para se juntarem contigo e a partir disso, conversamos melhor!',
    },
    {
      senderId: myId,
      content:
        'Boa noite, Matheus. Podemos marcar sim! Qual seria o melhor horário para nos reunirmos? Estou livre durante o dia inteiro, apenas me avise caso necessite alterar a data.',
    },
    {
      senderId: user.id,
      content:
        'Boa noite, Matheus. Podemos marcar sim! Qual seria o melhor horário para nos reunirmos? Estou livre durante o dia inteiro, apenas me avise caso necessite alterar a data.',
    },
    {
      senderId: myId,
      content:
        'Boa noite, Matheus. Podemos marcar sim! Qual seria o melhor horário para nos reunirmos? Estou livre durante o dia inteiro, apenas me avise caso necessite alterar a data.',
    },
    {
      senderId: myId,
      content:
        'Boa noite, Matheus. Podemos marcar sim! Qual seria o melhor horário para nos reunirmos? Estou livre durante o dia inteiro, apenas me avise caso necessite alterar a data.',
    },
  ];

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
        <S.MessagesContainer>
          {messages.map((message) => (
            <S.Message isMine={message.senderId !== user.id}>
              <Typography
                style='text'
                color={message.senderId !== user.id ? 'white' : '#212529'}
                fontSize='1rem'
              >
                {message.content}
              </Typography>
            </S.Message>
          ))}
        </S.MessagesContainer>

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
