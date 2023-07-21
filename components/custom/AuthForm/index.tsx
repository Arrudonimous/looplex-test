import Typography from '@/components/core/Typography';
import * as S from './styles';

const AuthForm = () => {
  return (
    <S.AuthFormContainer>
      <Typography style='title' level={2}>
        Conecte-se
      </Typography>
    </S.AuthFormContainer>
  );
};

export default AuthForm;
