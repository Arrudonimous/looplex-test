import * as S from './styles';
import Form, { ItemProps } from '@/components/core/Form';
import Typography from '@/components/core/Typography';

const items: ItemProps[] = [
  {
    label: 'Email',
    errorMessage: 'Por favor, insira seu Email!',
  },
  {
    label: 'Senha',
    type: 'password',
    errorMessage: 'Por favor, insira sua Senha!',
  },
];

const onFinish = (values: any) => {
  console.log('oi');
};

const onFinishFailed = (values: any) => {
  console.log(values);
};

const AuthForm = () => {
  return (
    <S.AuthFormContainer>
      <Typography style='title' color='white' fontSize='32px'>
        Conecte-se
      </Typography>
      <Form items={items} onFinish={onFinish} onFinishFailed={onFinishFailed} />
      <S.AuthFormFooterContainer>
        <Typography style='text' color='white' fontSize='18px'>
          Ou
        </Typography>
        <Typography style='text' color='white' fontSize='18px'>
          Conecte-se aqui
        </Typography>
      </S.AuthFormFooterContainer>
    </S.AuthFormContainer>
  );
};

export default AuthForm;
