import styled from 'styled-components';

export const Login = styled.div`
  background-color: #fff;
  width: 1440px;
  height: 1025px;
  display: flex;
`;

export const LoginLogo = styled.img`
  width: 250px;
  height: 5%;
  object-fit: contain;
  margin: 30px;
`;

export const LoginWelcomeP = styled.p`
  margin-top: 120px;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const LoginBanner = styled.img`
  width: 720px;
  height: 1025px;
`;

export const LoginContainer = styled.div`
  width: 720px;
  height: 1025px;
  display: flex;
  flex-direction: column;
`;

export const LoginForm = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  .login_email {
    margin-bottom: 10px;
  }
  .login_password,
  .login_email {
    p {
      margin-bottom: 20px;
    }
  }

  .login_checkbox {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }

  .login_signup {
    display: flex;
    gap: 10px;
    margin: 0 auto;

    p {
      color: #ff0000;
    }
  }
`;

export const LoginBtn = styled.button`
  background-color: #0675e5;
  color: #fff;
  border-radius: 10px;
  width: 400px;
  height: 50px;
  &:hover {
    background-color: #3f6af7;
  }
`;

export const LoginInput = styled.input`
  padding: 0 10px;
  width: 400px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  &:focus {
    box-shadow: 1px 1px 1px 1px gray;
  }
`;
