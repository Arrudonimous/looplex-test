import { UsersProps } from '@/app/home/page';

import * as S from './styles';

import Typography from '@/components/core/Typography';

interface ContactProps {
  user: UsersProps;
}

const Contact = ({ user }: ContactProps) => {
  return (
    <S.ContactContainer>
      <S.ContactAvatar>{user.name.charAt(0)}</S.ContactAvatar>
      <Typography style='text' color='white'>
        {user.name} {user.lastName}
      </Typography>
    </S.ContactContainer>
  );
};

export default Contact;
