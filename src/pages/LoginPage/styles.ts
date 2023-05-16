import styled from 'styled-components';

export const Login = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  width: 1440px;
  height: 100vh;
  display: flex;
  margin: auto;
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
  width: auto;
  height: 100%;
`;

export const LoginContainer = styled.div`
  width: 700px;
  height: 100%;
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
      color: ${({ theme }) => theme.color.masterTag};
    }
  }

  .login_checkbox {
    display: flex;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .login_signup {
    display: flex;
    gap: 10px;
    margin: 0 auto;
  }
  .link_to_signup {
    color: ${({ theme }) => theme.color.masterTag};
  }

  span {
    color: ${({ theme }) => theme.color.masterTag};
    display: none;
  }
`;

export const LoginBtn = styled.button`
  background-color: ${({ theme }) => theme.color.buttonActive};
  color: ${({ theme }) => theme.color.btnInactiveBackground};
  border-radius: 10px;
  width: 400px;
  height: 50px;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonActive};
  }
`;

export const LoginInput = styled.input`
  padding: 0 10px;
  width: 400px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.color.inputBorder};
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  &:focus {
    box-shadow: 1px 1px 1px 1px gray;
  }
`;
