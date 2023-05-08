import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  object-fit: contain;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0 10px;
`;

export const ResetBtn = styled.button`
  font-size: 0px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.button01};
  background-color: ${({ theme }) => theme.color.background};

  svg {
    width: 100%;
    height: 100%;
    path {
      stroke: ${({ theme }) => theme.color.button01};
    }
  }
`;

export const AddPlanBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.button01};
  color: ${({ theme }) => theme.color.buttonText};
`;
