import styled from 'styled-components';

export const UserDiv = styled.div`
  display: flex;
  width: 1000px;
  height: 63px;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  border-top: 0px;
  align-items: center;
  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }
`;
export const ProfileImg = styled.img`
  position: absolute;
  margin-left: 35px;
  width: 38px;
  height: 38px;
`;
export const NameBox = styled.div`
  width: 250px;
  height: 32px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RoleBox = styled.div`
  width: 200px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RoleSelect = styled.select`
  border: 0px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 10px;
  width: 80px;
  text-align: center;
`;

export const DateBox = styled.div`
  width: 250px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AnnualBox = styled.div`
  width: 250px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminBtn = styled.button`
  width: 49px;
  height: 25px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.btnInactive};
  background-color: ${({ theme }) => theme.color.btnInactive};
  font-size: 12px;
  position: absolute;
  margin-left: 920px;
`;
export const DeleteBtn = styled.button`
  width: 49px;
  height: 25px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.btnInactive};
  background-color: ${({ theme }) => theme.color.btnInactive};
  font-size: 12px;
  position: absolute;
  margin-left: 180px;
`;
