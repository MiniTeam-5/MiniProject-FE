import { Link } from 'react-router-dom';
import * as S from './styles';
import { useState, useEffect } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Login } from '../../interfaces/user';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange' });

  const userEmail = useSelector((state: any) => state.rememberEmail);

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(userEmail);

    if (userEmail.checked) {
      setIsChecked(true);
      setEmail(userEmail.email);
    }
  }, []);
  const changeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const login = useLogin(isChecked);

  const onSubmit = (data: Login) => {
    if (Object.keys(errors).length === 0) {
      login(data);
    } else {
      Swal.fire({
        title: '로그인 실패',
        text: '이메일 혹은 비밀번호가 일치하지 않습니다.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
  };

  return (
    <S.Login>
      <S.LoginContainer>
        <S.LoginLogo src='assets/logo.png' alt='logo' />
        <S.LoginWelcomeP>Welcome Back!</S.LoginWelcomeP>
        <form onSubmit={handleSubmit(onSubmit)} id='form'>
          <S.LoginForm>
            <div className='login_email'>
              <label>Email</label>
              <S.LoginInput
                type='text'
                placeholder='이메일'
                defaultValue={email}
                {...register('email', {
                  required: true,
                  pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
                })}
              />
              {errors.email?.type === 'pattern' && <p>유효한 이메일 주소를 입력해주세요</p>}
            </div>

            <div className='login_password'>
              <label>Password</label>
              <S.LoginInput
                type='password'
                placeholder='비밀번호'
                {...register('password', { required: true, minLength: 2 })}
              />
              {errors.password?.type === 'minLength' && <p>비밀번호는 최소 2자 이상이어야 합니다</p>}
            </div>

            <div className='login_checkbox' onClick={changeCheckbox}>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
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
      <S.LoginBanner src='assets/banner01.png' alt='Banner' />
    </S.Login>
  );
}

export default LoginPage;
