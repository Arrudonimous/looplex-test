'use client';
import * as S from './styles';
import AuthForm from '../AuthForm';
import Image from 'next/image';
import LooplexLogo from '@/public/images/looplex-logo.png';
import { ItemProps } from '@/components/core/Form';

interface AuthContainerProps {
  title: string;
  subtitle: string;
  redirectUrl?: string;
  items: ItemProps[];
  buttonTitle: string;
}

const AuthContainer = ({
  title,
  redirectUrl,
  subtitle,
  items,
  buttonTitle,
}: AuthContainerProps) => {
  return (
    <S.AuthContainerWrapper>
      <S.InfoContainer>
        <Image src={LooplexLogo} width={368} height={128} alt='Looplex Logo' className='logoImage'/>
        <S.DescriptionParagraph>
          Projeto de chat desenvolvido com: NextJs, Pocketbase e Ant Design
        </S.DescriptionParagraph>
      </S.InfoContainer>
      <AuthForm
        title={title}
        redirectUrl={redirectUrl}
        subtitle={subtitle}
        items={items}
        buttonTitle={buttonTitle}
      />
    </S.AuthContainerWrapper>
  );
};

export default AuthContainer;
