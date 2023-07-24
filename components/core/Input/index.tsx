import { poppins } from '@/styles/font';
import { Input as InputCore } from 'antd';

interface InputProps {
  type?: 'password';
  placeholder?: string;
  onChange?: any;
  value?: string;
}

const Input = ({ type, placeholder, onChange, value }: InputProps) => {
  return (
    <InputCore
      size='large'
      type={type}
      className={poppins.className}
      style={{ backgroundColor: '#D9D9D9' }}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
