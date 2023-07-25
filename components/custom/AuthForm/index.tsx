import { useRouter } from 'next/navigation';

import * as S from './styles';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Form, { ItemProps } from '@/components/core/Form';
import Link from 'next/link';
import pb from '@/lib/pocketbase';
import Typography from '@/components/core/Typography';
import { useState } from 'react';

interface AuthFormProps {
  title: string;
  subtitle: string;
  redirectUrl?: string;
  items: ItemProps[];
  buttonTitle: string;
}

const errors = [
  {
    code: 'validation_invalid_email',
    message: 'E-mail já cadastrado',
  },
  {
    code: 'validation_is_email',
    message: 'Formato de E-mail inválido',
  },
  {
    code: 'validation_values_mismatch',
    message: 'As senhas não correspondem',
  },
  {
    code: 'validation_length_out_of_range',
    message: 'A senha deve ter mais de 5 caracteres',
  },
  {
    code: 'Failed to authenticate.',
    message: 'Verifique suas credenciais e tente novamente',
  },
];

const AuthForm = ({
  title,
  redirectUrl,
  subtitle,
  items,
  buttonTitle,
}: AuthFormProps) => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const onFinish = async (values: any) => {
    if (values.NomeCompleto) {
      setIsLoading(true);
      try {
        const createdUserData = await pb.collection('users').create({
          email: values.Email,
          password: values.Senha,
          passwordConfirm: values.ConfirmaçãodeSenha,
          name: values.NomeCompleto,
          emailVisibility: true,
        });

        const resultList = await pb.collection('users').getFullList();
        pb.autoCancellation(false);
        resultList.forEach(async (user) => {
          if (user.id !== createdUserData.id) {
            await pb.collection('chats').create({
              user1: user.id,
              user2: createdUserData.id,
              messages: [],
            });
          }
        });

        toast('Usuário cadastrado com sucesso!', {
          autoClose: 2000,
          type: 'success',
        });
        const authData = await pb
          .collection('users')
          .authWithPassword(values.Email, values.Senha);

        setTimeout(() => {
          router.push('/home');
        }, 1000);
      } catch (error: any) {
        if (error.data.data.email) {
          const errorMessage = errors.find(
            (customError) => customError.code === error.data.data.email.code
          )?.message;
          toast(errorMessage, {
            autoClose: 2000,
            type: 'error',
          });
        } else if (error.data.data.password) {
          const errorMessage = errors.find(
            (customError) => customError.code === error.data.data.password.code
          )?.message;
          toast(errorMessage, {
            autoClose: 2000,
            type: 'error',
          });
        } else if (error.data.data.passwordConfirm) {
          const errorMessage = errors.find(
            (customError) =>
              customError.code === error.data.data.passwordConfirm.code
          )?.message;
          toast(errorMessage, {
            autoClose: 2000,
            type: 'error',
          });
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);

      try {
        await pb
          .collection('users')
          .authWithPassword(values.Email, values.Senha);
        toast('Logado com sucesso!', {
          autoClose: 2000,
          type: 'success',
        });

        setTimeout(() => {
          router.push('/home');
        }, 1000);
      } catch (error: any) {
        if (error.data.code) {
          const errorMessage = errors.find(
            (customError) => customError.code === error.data.message
          )?.message;
          toast(errorMessage, {
            autoClose: 2000,
            type: 'error',
          });
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onFinishFailed = (values: any) => {
    toast('Preencha os campos e tente novamente', {
      autoClose: 2000,
      type: 'error',
    });
  };

  return (
    <S.AuthFormContainer>
      <Typography style='title' color='white' fontSize='32px'>
        {title}
      </Typography>
      <Form
        items={items}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        buttonTitle={buttonTitle}
        loading={loading}
      />
      <S.AuthFormFooterContainer>
        <Typography style='text' color='white' fontSize='18px'>
          Ou
        </Typography>
        <Typography style='text' color='white' fontSize='18px'>
          {subtitle}
          <Link
            href={`/${redirectUrl ? redirectUrl : ''}`}
            style={{ marginLeft: 8, textDecoration: 'underline' }}
          >
            aqui
          </Link>
        </Typography>
      </S.AuthFormFooterContainer>
    </S.AuthFormContainer>
  );
};

export default AuthForm;
