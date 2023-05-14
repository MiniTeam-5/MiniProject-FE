import { Link } from 'react-router-dom';
import * as S from './styles';
import { SyntheticEvent, useState, useRef, useEffect } from 'react';
import { useLogin } from '../../hooks/useLogin';

const RegexID = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{2,}$/;

function LoginPage() {
  const emailErrorRef = useRef<HTMLSpanElement>(null);
  const passwordErrorRef = useRef<HTMLSpanElement>(null);

  const inputEmail = useRef<HTMLInputElement>(null);

  const [isChecked, setIsChecked] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setValues({
      ...values,
      [target.name]: target.value
    });
    if (emailErrorRef.current && passwordErrorRef.current) {
      switch (target.name) {
        case 'email':
          emailErrorRef.current.style.display = RegexID.test(target.value) ? 'none' : 'block';
          break;
        case 'password':
          passwordErrorRef.current.style.display = RegexPW.test(target.value) ? 'none' : 'block';
          break;
      }
    }
  };
  useEffect(() => {
    if (localStorage.getItem('rememberMe')) {
      setIsChecked(true);
      const localuserEmail = localStorage.getItem('userEmail');

      if (localuserEmail && inputEmail.current != null) {
        inputEmail.current.value = localuserEmail;
      }
    }
  });
  const changeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleRememberMe = () => {
    localStorage.setItem('rememberMe', isChecked ? 'true' : 'false');
  };

  const login = useLogin(isChecked);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    login(values);
  };

  return (
    <S.Login>
      <S.LoginContainer>
        <S.LoginLogo src='public/assets/logo.png' alt='logo' />
        <S.LoginWelcomeP>Welcome Back!</S.LoginWelcomeP>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <S.LoginForm>
            <div className='login_email'>
              <p>Email</p>
              <S.LoginInput type='text' name='email' placeholder='이메일' className='login_email' ref={inputEmail} />
              <span ref={emailErrorRef}>올바른 이메일 형식이 아닙니다.</span>
            </div>

            <div className='login_password'>
              <p>Password</p>
              <S.LoginInput type='password' name='password' placeholder='비밀번호' className='login_password' />
              <span ref={passwordErrorRef}>올바른 비밀번호 형식이 아닙니다.</span>
            </div>

            <div className='login_checkbox' onClick={changeCheckbox}>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                  handleRememberMe();
                }}
                className='saveEmail'
              />
              <p>이메일 주소 기억하기</p>
            </div>

            <S.LoginBtn type='submit'>로그인 하기</S.LoginBtn>

            <div className='login_signup'>
              <p>아직 계정이 없으신가요?</p>
              <Link to={'/signup'}>
                <p className='link_to_signup'>회원가입</p>
              </Link>
            </div>
          </S.LoginForm>
        </form>
      </S.LoginContainer>
      <S.LoginBanner src='public/assets/banner01.png' alt='Banner' />
    </S.Login>
  );
}

export default LoginPage;
