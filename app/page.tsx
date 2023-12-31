'use client';

import 'react-toastify/dist/ReactToastify.css';
import { ItemProps } from '@/components/core/Form';
import { ToastContainer } from 'react-toastify';
import * as S from './styles';
import AuthContainer from '@/components/custom/AuthContainer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
        title='Conecte-se'
        redirectUrl='register'
        subtitle='Cadastre-se'
        items={items}
        buttonTitle='ENTRAR'
      />
      <ToastContainer autoClose={2000} />
    </S.Wrapper>
  );
};

export default Index;
