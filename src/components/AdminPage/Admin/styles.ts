import styled from 'styled-components';

export const Wrapper = styled.div``;
export const IndexDiv = styled.div`
  display: flex;
  width: 1000px;
  height: 63px;
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
  text-align: center;
  align-items: center;
  margin-left: 15px;
  line-height: 190%;
`;
export const RoleBox = styled.div`
  width: 200px;
  height: 32px;
  align-items: center;
  text-align: center;
  line-height: 190%;
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
  text-align: center;
  align-items: center;
  line-height: 190%;
`;
export const AnnualBox = styled.div`
  width: 250px;
  height: 32px;
  text-align: center;
  align-items: center;
  line-height: 190%;
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

export const PageBtn = styled.button<{ isActive: boolean }>`
  font-size: 20px;
  margin-top: 10px;
  ${(props) =>
    props.isActive &&
    `
    text-decoration: underline;
  `}
`;
export const inActivePageBtn = styled.button`
  font-size: 20px;
  margin-top: 10px;
  color: white;
  cursor: default;
`;

export const PageBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
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

export const SearchBox = styled.div`
  width: 240px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.color.inputBorder};
  //justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;
  position: absolute;
  top: 110px;
  //left: 830px;
  right: 535px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 5px;
`;

export const SearchInput = styled.input`
  width: 140px;
  height: 24px;
  margin-left: 5px;
`;

export const SearchBtn = styled.button`
  width: 55px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.btnInactive};
  font-size: 14px;
`;
