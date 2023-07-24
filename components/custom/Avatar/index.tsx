import * as S from './styles';

interface AvatarProps {
  name: string;
}

const Avatar = ({ name }: AvatarProps) => {
  return <S.ContactAvatar>{name.charAt(0)}</S.ContactAvatar>;
};

export default Avatar;
