import { poppins } from '@/styles/font';
import { Input as InputCore } from 'antd';

interface InputProps {
  type?: 'password';
  placeholder?: string;
  onChange?: any;
}

const Input = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <InputCore
      size='large'
      type={type}
      className={poppins.className}
      style={{ backgroundColor: '#D9D9D9' }}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
