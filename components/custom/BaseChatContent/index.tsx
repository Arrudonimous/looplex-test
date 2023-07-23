import Image from 'next/image';
import * as S from './styles';
import LooplexLogo from '@/public/images/looplex-logo.png';
import Typography from '@/components/core/Typography';

const BaseChatContent = () => {
  return (
    <S.Wrapper>
      <Image src={LooplexLogo} width={368} height={128} alt='Looplex Logo' />
      Projeto de chat desenvolvido com: NextJs, Pocketbase e Ant Design
    </S.Wrapper>
  );
};

export default BaseChatContent;
