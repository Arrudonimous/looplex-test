import { Poppins } from 'next/font/google';
import { Typography } from 'antd';

const { Paragraph: ParagraphCore } = Typography;
const poppins = Poppins({ subsets: ['latin'], weight: '500' });

interface ParagraphProps {
  children: String;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <ParagraphCore className={poppins.className}>{children}</ParagraphCore>
  );
};

export default Paragraph;
