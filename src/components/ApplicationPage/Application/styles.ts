import styled from 'styled-components';

export const Wrapper = styled.div``;
export const SelectBtns = styled.div`
  display: flex;
  gap: 0 20px;
  margin-bottom: 40px;
`;

export const SelectBtn = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.btnInactive};
  background-color: ${({ theme }) => theme.color.btnInactiveBackground};
  font-size: 20px;
  &.active {
    border: 2px solid ${({ theme }) => theme.color.buttonActive};
    background-color: ${({ theme }) => theme.color.btnActiveBackground};
    color: ${({ theme }) => theme.color.buttonActive};
    font-weight: 500;
  }
`;
