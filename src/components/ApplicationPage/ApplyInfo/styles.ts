import styled from 'styled-components';

export const ApplyInfo = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.btnInactive};
`;

export const ApplyInfoTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const ApplyInfoContent = styled.p`
  margin-bottom: 10px;
`;
