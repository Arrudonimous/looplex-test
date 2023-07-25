import { poppins } from '@/styles/font';
import { Typography as TypographyCore } from 'antd';

interface TypographyProps {
  children: React.ReactNode;
  level?: 5 | 4 | 3 | 2 | 1;
  style: 'title' | 'paragraph' | 'text';
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  props?: any;
}

const { Title, Paragraph, Text } = TypographyCore;

const Typography = ({
  children,
  level,
  style,
  color,
  fontSize,
  fontWeight,
  props,
}: TypographyProps) => {
  if (style === 'title') {
    return (
      <Title
        level={level}
        style={{
          color,
          fontSize,
          lineHeight: '35px',
          fontWeight,
          padding: 0,
          margin: 0,
        }}
        className={poppins.className}
      >
        {children}
      </Title>
    );
  } else if (style === 'paragraph') {
    return (
      <Paragraph
        style={{
          color,
          fontSize,
          fontWeight,
          padding: 0,
          margin: 0,
        }}
        className={poppins.className}
      >
        {children}
      </Paragraph>
    );
  } else {
    return (
      <Text
        style={{
          color,
          fontSize,
          fontWeight,
          padding: 0,
          margin: 0,
        }}
        className={poppins.className}
      >
        {children}
      </Text>
    );
  }
};

export default Typography;
