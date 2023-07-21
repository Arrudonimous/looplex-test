'use client';
import Image from 'next/image';
import * as S from './styles';
import LooplexLogo from '@/public/images/looplex-logo.png';
import AuthForm from '../AuthForm';

const AuthContainer = () => {
  return (
    <S.AuthContainerWrapper>
      <S.InfoContainer>
        <Image src={LooplexLogo} width={368} height={128} alt='Looplex Logo' />
        <S.DescriptionParagraph>
          Projeto de chat desenvolvido com: NextJs, Pocketbase e Ant Design
        </S.DescriptionParagraph>
      </S.InfoContainer>
      <AuthForm />
    </S.AuthContainerWrapper>
  );
};

export default AuthContainer;
