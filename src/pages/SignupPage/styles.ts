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
    margin-top: 100px;
    margin-bottom: 65px;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const SignupHeader = styled.div`
  width: 720px;
  height: 10%;
  display: flex;
  justify-content: space-between;

  .close {
    margin: 50px;
    width: 35px;
    height: 35px;
    font-size: 35px;
    cursor: pointer;
  }
`;

export const SignupLogo = styled.img`
  width: 225px;
  height: 35px;
  margin: 50px;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .Container {
    display: grid;
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: repeat(3, 160px);
    column-gap: 20px;

    p {
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.color.inputBorder};
      padding: 0 10px;

      &:focus {
        box-shadow: 1px 1px 1px 1px gray;
      }
    }
  }

  .userEmail {
    grid-column: span 2;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: #0675e5;
    color: #fff;
    border-radius: 10px;
    width: 400px;
    height: 50px;

    &:hover {
      background-color: #3f6af7;
    }
  }
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
