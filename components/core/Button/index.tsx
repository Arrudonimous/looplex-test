import { poppins } from '@/styles/font';
import { Button as ButtonCore } from 'antd';
import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  danger?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement> &
    MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
  loading: boolean;
}

const Button = ({
  children,
  htmlType,
  danger,
  onClick,
  block,
  loading,
}: ButtonProps) => {
  return (
    <ButtonCore
      block={block}
      style={{
        textTransform: 'uppercase',
        fontSize: '18px',
        fontWeight: 500,
        padding: '19px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        margin: 0,
      }}
      type='primary'
      className={poppins.className}
      htmlType={htmlType}
      danger={danger}
      onClick={onClick}
      loading={loading}
    >
      {children}
    </ButtonCore>
  );
};

export default Button;
