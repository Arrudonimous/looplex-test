'use client';

import 'react-toastify/dist/ReactToastify.css';
import { ItemProps } from '@/components/core/Form';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './styles';
import AuthContainer from '@/components/custom/AuthContainer';

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
  const router = useRouter();
  useEffect(() => {
    const loggedUserData = localStorage.getItem('pocketbase_auth');

    if (loggedUserData) {
      router.push('/home');
    }
  }, []);
  return (
    <S.Wrapper>
      <AuthContainer
        title='Cadastre-se'
        subtitle='Conecte-se'
        items={items}
        buttonTitle='CADASTRAR'
      />
      <ToastContainer autoClose={2000} />
    </S.Wrapper>
  );
};

export default RegisterPage;
