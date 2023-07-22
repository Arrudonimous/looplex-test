import { poppins } from '@/styles/font';
import { Input as InputCore } from 'antd';

interface InputProps {
  type?: 'password';
}

const Input = ({ type }: InputProps) => {
  return <InputCore size='large' type={type} className={poppins.className} />;
};

export default Input;
