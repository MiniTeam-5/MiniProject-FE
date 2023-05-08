import { Link } from 'react-router-dom';
import * as S from './styles';
import { useState } from 'react';

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const Login = () => {};

  return (
    <S.Login>
      <S.LoginContainer>
        <S.LoginLogo src='../../../public/assets/logo.png' alt='logo' />
        <S.LoginWelcomeP>Welcom Back!</S.LoginWelcomeP>
        <S.LoginForm>
          <div className='login_email'>
            <p>Email</p>
            <S.LoginInput
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='이메일'
              className='login_email'
            />
          </div>

          <div className='login_password'>
            <p>Password</p>
            <S.LoginInput
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='비밀번호'
              className='login_password'
            />
          </div>

          <div className='login_checkbox' onClick={ChangeCheckbox}>
            <input type='checkbox' checked={isChecked} onChange={ChangeCheckbox} className='saveEmail' />
            <p>이메일 주소 기억하기</p>
          </div>

          <S.LoginBtn onClick={Login}>로그인 하기</S.LoginBtn>

          <div className='login_signup'>
            <span>아직 계정이 없으신가요?</span>
            <Link to={'/signup'}>
              <p className='link_to_signup'>회원가입</p>
            </Link>
          </div>
        </S.LoginForm>
      </S.LoginContainer>
      <S.LoginBanner src='../../../public/assets/banner01.png' alt='Banner' />
    </S.Login>
  );
}

export default LoginPage;
