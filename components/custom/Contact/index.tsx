import { UsersProps } from '@/app/home/page';

import * as S from './styles';

import Typography from '@/components/core/Typography';
import Avatar from '../Avatar';

interface ContactProps {
  user: UsersProps;
  selected: boolean;
  setSelectedChat: any;
}

const Contact = ({ user, setSelectedChat, selected }: ContactProps) => {
  return (
    <S.ContactContainer onClick={setSelectedChat} selected={selected}>
      <Avatar name={user.name} />
      <div style={{ width: '60%' }}>
        <Typography style='text' color={selected ? '#212529' : 'white'}>
          {user.name} {user.lastName}
        </Typography>
      </div>
    </S.ContactContainer>
  );
};

export default Contact;
