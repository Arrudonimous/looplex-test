import * as S from './styles';
import Form, { ItemProps } from '@/components/core/Form';
import Typography from '@/components/core/Typography';
import Link from 'next/link';

interface AuthFormProps {
  title: string;
  subtitle: string;
  redirectUrl?: string;
  items: ItemProps[];
}


const onFinish = (values: any) => {
  console.log(values);
};

const onFinishFailed = (values: any) => {
  console.log(values);
};

const AuthForm = ({ title, redirectUrl, subtitle, items }: AuthFormProps) => {
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
