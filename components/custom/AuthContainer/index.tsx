'use client';
import * as S from './styles';
import AuthForm from '../AuthForm';
import Image from 'next/image';
import LooplexLogo from '@/public/images/looplex-logo.png';

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
