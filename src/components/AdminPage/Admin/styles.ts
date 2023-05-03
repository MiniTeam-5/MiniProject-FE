import styled from 'styled-components';

export const Wrapper = styled.div`
`;
export const IndexDiv = styled.div`
  display: flex;
  width: 1000px;
  height: 62.5px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.navbar};
  border: 2px solid ${({ theme }) => theme.color.navbar};
  border-radius: 10px 10px 0 0;
  color: ${({ theme }) => theme.color.buttonText};
  align-items: center;
`;

export const UserDiv = styled.div`
  display: flex;
  width: 1000px;
  height: 62.5px;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  align-items: center;
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`
export const ProfileImg = styled.img`
  position: absolute;  
  margin-left: 35px;
  width: 37.5px;
  height: 37.5px;
`
export const NameBox = styled.div`
  width: 250px;
  height: 31.25px;
  text-align: center;
  align-items: center;
  margin-left: 15px;
  line-height: 190%;
`;
export const RoleBox = styled.div`
  width: 200px;
  height: 31.25px;
  align-items: center;
  text-align: center;
  line-height: 190%;
`;
export const DateBox = styled.div`
  width: 250px;
  height: 31.25px;
  text-align: center;
  align-items: center;
  line-height: 190%;
`;
export const AnnualBox = styled.div`
  width: 250px;
  height: 31.25px;
  text-align: center;
  align-items: center;
  line-height: 190%;
`;

export const AdminBtn = styled.button`
  width: 48.75px;
  height: 25px;
  margin-left: 15px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.btnInactive};
  background-color: ${({ theme }) => theme.color.btnInactive};
  font-size: 12px;
`;
