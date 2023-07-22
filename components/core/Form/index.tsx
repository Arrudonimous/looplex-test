import { Form as FormCore, Input } from 'antd';
import { InputLabel } from './styles';
import { poppins } from '@/styles/font';
import Button from '@/components/core/Button';

export interface ItemProps {
  label: string;
  type?: 'password';
  errorMessage: string;
}

export interface FormProps {
  items: ItemProps[];
  onFinish: (values: any) => void;
  onFinishFailed: any;
}

const Form = ({ items, onFinish, onFinishFailed }: FormProps) => {
  return (
    <FormCore
      layout='vertical'
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 32,
        marginTop: 48,
      }}
      autoComplete='off'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {items.map((item) => (
        <FormCore.Item
          key={item.label}
          label={
            <InputLabel className={poppins.className}>{item.label}</InputLabel>
          }
          rules={[{ required: true, message: item.errorMessage }]}
          style={{ padding: 0, marginBottom: '32px' }}
          name={item.label}
        >
          <Input type={item.type} size='large' />
        </FormCore.Item>
      ))}
      <Button htmlType='submit'>Entrar</Button>
    </FormCore>
  );
};

export default Form;
