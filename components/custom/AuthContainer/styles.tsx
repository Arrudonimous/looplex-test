import { Typography } from 'antd';
import styled from 'styled-components';

export const AuthContainerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  max-width: 62rem;
  width: 100%;
`;

export const InfoContainer = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionParagraph = styled(Typography.Paragraph)`
  font-size: 28px;
  font-weight: 500;
`;
