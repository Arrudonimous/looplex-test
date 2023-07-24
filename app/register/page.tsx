'use client';

import { ItemProps } from '@/components/core/Form';
import * as S from './styles';
import AuthContainer from '@/components/custom/AuthContainer';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const items: ItemProps[] = [
  {
    label: 'Email',
    errorMessage: 'Por favor, insira seu Email!',
  },
  {
    label: 'Nome Completo',
    errorMessage: 'Por favor, insira seu Nome Completo!',
  },
  {
    label: 'Senha',
    type: 'password',
    errorMessage: 'Por favor, insira sua Senha!',
  },
  {
    label: 'Confirmação de Senha',
    type: 'password',
    errorMessage: 'Por favor, insira sua Senha novamente!',
  },
];

const RegisterPage = () => {
  return (
    <S.Wrapper>
      <AuthContainer title='Cadastre-se' subtitle='Conecte-se' items={items} buttonTitle="CADASTRAR"/>
      <ToastContainer autoClose={2000} />
    </S.Wrapper>
  );
};

export default RegisterPage;
