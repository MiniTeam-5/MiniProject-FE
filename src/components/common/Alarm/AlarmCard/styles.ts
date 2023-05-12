import styled from 'styled-components';

export const CardLi = styled.li`
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.color.inputBorder};
  color: ${({ theme }) => theme.color.text};
`;
export const StatusText = styled.p`
  margin-bottom: 8px;
  font-size: 15px;
`;
export const Status = styled.span`
  padding: 2px 6px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.buttonText};
  &.승인 {
    background-color: ${({ theme }) => theme.color.status03};
  }
  &.거절 {
    background-color: ${({ theme }) => theme.color.status02};
  }
`;

export const ApplyInfo = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const TimeDiff = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.placeholder};
`;
