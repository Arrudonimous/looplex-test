import { useRouter } from 'next/navigation';

import * as S from './styles';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Form, { ItemProps } from '@/components/core/Form';
import Link from 'next/link';
import pb from '@/lib/pocketbase';
import Typography from '@/components/core/Typography';

interface AuthFormProps {
  title: string;
  subtitle: string;
  redirectUrl?: string;
  items: ItemProps[];
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

const AuthForm = ({ title, redirectUrl, subtitle, items }: AuthFormProps) => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    if (values.NomeCompleto) {
      try {
        await pb.collection('users').create({
          email: values.Email,
          password: values.Senha,
          passwordConfirm: values.ConfirmaçãodeSenha,
          name: values.NomeCompleto,
        });

        toast('Usuário cadastrado com sucesso!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success',
        });

        await pb
          .collection('users')
          .authWithPassword(values.Email, values.Senha);

        setTimeout(() => {
          router.push('/home');
        }, 2100);
      } catch (error: any) {
        console.log(error.data.data);

        if (error.data.data.email) {
          const errorMessage = errors.find(
            (customError) => customError.code === error.data.data.email.code
          )?.message;

          toast(errorMessage, {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'error',
          });
        } else if (error.data.data.password) {
          const errorMessage = errors.find(
            (customError) => customError.code === error.data.data.password.code
          )?.message;

          toast(errorMessage, {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'error',
          });
        } else if (error.data.data.passwordConfirm) {
          const errorMessage = errors.find(
            (customError) =>
              customError.code === error.data.data.passwordConfirm.code
          )?.message;

          toast(errorMessage, {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'error',
          });
        }
      }
    } else {
      try {
        const authData = await pb
          .collection('users')
          .authWithPassword(values.Email, values.Senha);

        toast('Logado com sucesso!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success',
        });

        setTimeout(() => {
          router.push('/home');
        }, 2100);
      } catch (error: any) {
        if (error.data.code) {
          const errorMessage = errors.find(
            (customError) => customError.code === error.data.message
          )?.message;

          toast(errorMessage, {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'error',
          });
        }
      }
    }
  };

  const onFinishFailed = (values: any) => {
    console.log(values);
  };

  return (
    <S.AuthFormContainer>
      <Typography style='title' color='white' fontSize='32px'>
        {title}
      </Typography>
      <Form items={items} onFinish={onFinish} onFinishFailed={onFinishFailed} />
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
