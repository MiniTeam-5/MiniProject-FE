import styled from 'styled-components';

export const SignupContainer = styled.div`
  width: 1440px;
  height: 1025px;
  display: flex;
  background-color: #fff;
`;
export const SignupBanner = styled.img`
  width: 720px;
  height: 100%;
`;

export const SignupFormContainer = styled.div`
  width: 720px;
  .title {
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const SignupHeader = styled.div`
  width: 720px;
  height: 10%;
  display: flex;
  justify-content: space-between;

  .close {
    margin: 50px;
    width: 50px;
    height: 50px;
    font-size: 40px;
  }
`;

export const SignupLogo = styled.img`
  width: 225px;
  height: 47px;
  margin: 50px;
`;

export const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SignupBtn = styled.button`
  background-color: #0675e5;
  color: #fff;
  border-radius: 10px;
  width: 400px;
  height: 50px;
  &:hover {
    background-color: #3f6af7;
  }
`;
export const SignupName = styled.div``;
export const SignupDate = styled.div``;
export const SignupEmail = styled.div``;
export const SignupPassword = styled.div``;
export const SignupPasswordCheck = styled.div``;
