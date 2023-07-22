'use client';

import { ItemProps } from '@/components/core/Form';
import * as S from './styles';
import AuthContainer from '@/components/custom/AuthContainer';

const items: ItemProps[] = [
  {
    label: 'Email',
    errorMessage: 'Por favor, insira seu Email!',
  },
  {
    label: 'Nome',
    errorMessage: 'Por favor, insira seu Nome!',
  },
  {
    label: 'Sobrenome',
    errorMessage: 'Por favor, insira seu Sobrenome!',
  },
  {
    label: 'Senha',
    type: 'password',
    errorMessage: 'Por favor, insira sua Senha!',
  },
];

const RegisterPage = () => {
  return (
    <S.Wrapper>
      <AuthContainer title='Cadastre-se' subtitle='Conecte-se' items={items} />
    </S.Wrapper>
  );
};

export default RegisterPage;
