import styled from 'styled-components';

export const AlarmList = styled.div`
  position: absolute;
  top: 40px;
  left: 320px;
  width: 310px;
  height: 420px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.text};
  margin-bottom: 20px;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 24px;
`;

export const AlarmUl = styled.ul`
  height: 360px;
  overflow-y: scroll;
`;
