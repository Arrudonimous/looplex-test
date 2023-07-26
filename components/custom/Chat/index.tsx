import { useEffect, useState } from 'react';
import { UsersProps } from '@/app/home/page';

import * as S from './styles';

import Avatar from '../Avatar';
import Typography from '@/components/core/Typography';
import { MailOutlined, SendOutlined } from '@ant-design/icons';
// import Input from '@/components/core/Input';
// import Button from '@/components/core/Button';
import pb from '@/lib/pocketbase';
import { Form, Input, Button } from 'antd';

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
  const [form] = Form.useForm();

  const scrollIntoLastMessage = () => {
    const lastMessage = document.getElementById(`${messages?.length - 1}`);

    lastMessage?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (values: any) => {

    setLoading(true);
      const incomingMessage = {
        senderId: loggedUserData.model.id,
        content: values.message,
      };
      sendMessagesData.push(incomingMessage);

      if (chatId) {
        await pb
          .collection('chats')
          .update(chatId, { messages: sendMessagesData });

        setLoading(false);
      }
    form.resetFields();
    scrollIntoLastMessage()
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
          <Form form={form} layout="inline" onFinish={handleSendMessage} style={{ width: '100%'}} >
            <Form.Item name="message" style={{ width: screen.width <= 990 ? '77%' : '90%'}}>
              <Input
                type="text"
                placeholder="Digite sua mensagem"
                  size='large'

              />                
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                  size='large'
                >
                  <SendOutlined style={{ fontSize: '1.5rem' }} />
                </Button>
              )}
            </Form.Item>
          </Form>

          
        </S.SendMessageContainer>
      </S.ChatContent>
    </S.ChatWrapper>
  );
};

export default Chat;
