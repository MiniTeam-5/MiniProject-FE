import styled from 'styled-components';

export const CardLi = styled.li`
  padding: 10px;
  padding-top: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.color.inputBorder};
  color: ${({ theme }) => theme.color.text};
  &.new {
    background-color: #f5f5fc;
  }
`;
export const StatusText = styled.p`
  position: relative;
  margin-bottom: 8px;
  font-size: 15px;

  span {
    font-weight: 600;
  }
  .ANNUAL {
    color: ${({ theme }) => theme.color.status03};
  }
  .DUTY {
    color: ${({ theme }) => theme.color.status02};
  }
`;
export const Status = styled.span`
  padding: 2px 6px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.buttonText};
  &.APPROVAL {
    background-color: ${({ theme }) => theme.color.status03};
  }
  &.REJECTION {
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
