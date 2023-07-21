import { Typography as TypographyCore } from 'antd';

interface TypographyProps {
  children: React.ReactNode;
  level?: 5 | 4 | 3 | 2 | 1;
  style: 'title' | 'paragraph' | 'text';
}

const { Title, Paragraph, Text } = TypographyCore;

const Typography = ({ children, level, style }: TypographyProps) => {
  if (style === 'title') {
    return <Title level={level}>{children}</Title>;
  } else if (style === 'paragraph') {
    return <Paragraph>{children}</Paragraph>;
  } else {
    return <Text>{children}</Text>;
  }
};

export default Typography;
