import styled from 'styled-components';

export const ApplyInfo = styled.div`
  position: relative;
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
export const ApplyBtn = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.button01};
  color: ${({ theme }) => theme.color.buttonText};
  position: absolute;
  top: 20px;
  right: 20px;
`;
