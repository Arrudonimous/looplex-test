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
    label: 'Senha',
    type: 'password',
    errorMessage: 'Por favor, insira sua Senha!',
  },
];

const Index = () => {
  return (
    <S.Wrapper>
      <AuthContainer
        title='Conecte-se'
        redirectUrl='register'
        subtitle='Cadastre-se'
        items={items}
      />
    </S.Wrapper>
  );
};

export default Index;
