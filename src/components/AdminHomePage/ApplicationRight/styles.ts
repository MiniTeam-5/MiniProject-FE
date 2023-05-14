import styled from 'styled-components';

export const ApplicationRight = styled.div`
  flex-shrink: 0;
  width: 300px;
  margin-left: 22px;
  text-align: center;
  font-weight: 600;
`;

export const Waiting = styled.div`
  height: 180px;
  padding: 32px 35px 42px;
  background: ${({ theme }) => theme.color.btnActiveBackground};
  border-radius: 30px;
  margin-bottom: 20px;
  p {
    font-size: 24px;
    margin-bottom: 43px;
  }

  strong {
    font-weight: 600;
    font-size: 40px;
  }
`;

export const Today = styled.div`
  height: 220px;
  padding: 30px 0 35px;
  background: ${({ theme }) => theme.color.buttonActive};
  color: ${({ theme }) => theme.color.buttonText};
  border-radius: 30px;
  p {
    font-size: 70px;
    margin-bottom: 30px;
  }
  span {
    font-size: 50px;
  }
`;
