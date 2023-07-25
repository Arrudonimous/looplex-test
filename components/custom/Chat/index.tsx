import { useEffect, useState } from 'react';
import { UsersProps } from '@/app/home/page';

import * as S from './styles';

import Avatar from '../Avatar';
import Typography from '@/components/core/Typography';
import { MailOutlined, SendOutlined } from '@ant-design/icons';
import Input from '@/components/core/Input';
import Button from '@/components/core/Button';
import pb from '@/lib/pocketbase';

interface ChatProps {
  user: UsersProps;
  messages: any;
  chatId: string | undefined;
}

const Chat = ({ user, messages, chatId }: ChatProps) => {
  const [loggedUserData, setLoggedUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [sendMessageText, setSendMessageText] = useState('');
  const sendMessagesData = messages;

  const scrollIntoLastMessage = () => {
    const lastMessage = document.getElementById(`${messages?.length - 1}`);

    lastMessage?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    setLoading(true);
    if (sendMessageText.trim()) {
      const incomingMessage = {
        senderId: loggedUserData.model.id,
        content: sendMessageText,
      };
      sendMessagesData.push(incomingMessage);

      if (chatId) {
        await pb
          .collection('chats')
          .update(chatId, { messages: sendMessagesData });

        setSendMessageText('');
        setLoading(false);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const loggedUserData = localStorage.getItem('pocketbase_auth');

    if (loggedUserData) {
      const loggedUserParsed = JSON.parse(loggedUserData);
      setLoggedUserData(loggedUserParsed);
    }

    scrollIntoLastMessage();
  }, [messages]);

  return (
    <S.ChatWrapper>
      <S.ChatHeader>
        <S.NameContainer>
          <Avatar name={user.name} />
          <Typography
            style='text'
            color='white'
            fontSize={screen.width <= 990 ? '1rem' : '1.5rem'}
          >
            {user.name}
          </Typography>
        </S.NameContainer>

        <S.EmailContainer>
          <Typography
            style='text'
            color='white'
            fontSize={screen.width <= 990 ? '0.8rem' : '1rem'}
          >
            {user.email}
          </Typography>
          <MailOutlined
            style={{ fontSize: '2.5rem', color: 'white' }}
            className='mailIcon'
          />
        </S.EmailContainer>
      </S.ChatHeader>
      <S.ChatContent>
        <S.MessagesContainer>
          {messages?.map((message: any, index: any) => (
            <S.Message
              isMine={message.senderId !== user.id}
              key={index}
              id={index}
            >
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
            onChange={(e: any) => setSendMessageText(e.target.value)}
            value={sendMessageText}
          />
          <Button onClick={handleSendMessage} loading={loading}>
            <SendOutlined style={{ fontSize: '1.5rem' }} />
          </Button>
        </S.SendMessageContainer>
      </S.ChatContent>
    </S.ChatWrapper>
  );
};

export default Chat;
