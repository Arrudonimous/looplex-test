import { UsersProps } from '@/app/home/page';

import * as S from './styles';

import Typography from '@/components/core/Typography';

interface ContactProps {
  user: UsersProps;
  selected: boolean;
  setSelectedChat: any;
}

const Contact = ({ user, setSelectedChat, selected }: ContactProps) => {
  return (
    <S.ContactContainer onClick={setSelectedChat} selected={selected}>
      <S.ContactAvatar>{user.name.charAt(0)}</S.ContactAvatar>
      <Typography style='text' color={selected ? '#212529' : 'white'}>
        {user.name} {user.lastName}
      </Typography>
    </S.ContactContainer>
  );
};

export default Contact;
