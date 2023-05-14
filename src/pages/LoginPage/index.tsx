// @ts-nocheck
import { Link } from 'react-router-dom';
import * as S from './styles';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useDispatch } from 'react-redux';

const RegexID = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{2,}$/;

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const HandleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    const targetValue = `target_${e.target.name}`;
    const targetEl = document.querySelector(`#${targetValue}`);

    switch (targetValue) {
      case 'target_email':
        targetEl.style.display = RegexID.test(e.target.value) ? 'none' : 'block';
        break;
      case 'target_password':
        targetEl.style.display = RegexPW.test(e.target.value) ? 'none' : 'block';
        break;
    }
  };

  const ChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const Login = useLogin();

  const HandleSubmit = (e) => {
    e.preventDefault();
    Login(values);
  };

  return (
    <S.Login>
      <S.LoginContainer>
        <S.LoginLogo src='../../../public/assets/logo.png' alt='logo' />
        <S.LoginWelcomeP>Welcome Back!</S.LoginWelcomeP>
        <form onSubmit={HandleSubmit} onChange={HandleChange}>
          <S.LoginForm>
            <div className='login_email'>
              <p>Email</p>
              <S.LoginInput type='text' name='email' placeholder='이메일' className='login_email' />
              <span id='target_email'>올바른 이메일 형식이 아닙니다.</span>
            </div>

            <div className='login_password'>
              <p>Password</p>
              <S.LoginInput type='password' name='password' placeholder='비밀번호' className='login_password' />
              <span id='target_password'>올바른 비밀번호 형식이 아닙니다.</span>
            </div>

            <div className='login_checkbox' onClick={ChangeCheckbox}>
              <input type='checkbox' checked={isChecked} onChange={ChangeCheckbox} className='saveEmail' />
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
      <S.LoginBanner src='../../../public/assets/banner01.png' alt='Banner' />
    </S.Login>
  );
}

export default LoginPage;
