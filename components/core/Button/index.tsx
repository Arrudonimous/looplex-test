import { poppins } from '@/styles/font';
import { Button as ButtonCore } from 'antd';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, htmlType }: ButtonProps) => {
  return (
    <ButtonCore
      block
      style={{
        textTransform: 'uppercase',
        fontSize: '18px',
        fontWeight: 500,
        padding: '19px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
      type='primary'
      className={poppins.className}
      htmlType={htmlType}
    >
      {children}
    </ButtonCore>
  );
};

export default Button;
