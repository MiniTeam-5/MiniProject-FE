// @ts-nocheck
import { useState } from 'react';
import * as S from './styles';
import { useSignup } from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

const RegexID = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{8,}$/;
const RegexName = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

function SignupPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
    checkPassword: '',
    username: '',
    hireDate: ''
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
        break;
      case 'target_password':
        break;
      case 'target_checkPassword':
        break;
      case 'target_username':
        break;
      case 'target_hireDate':
        break;
    }
  };

  const signup = useSignup();

  const HandleSubmit = (e) => {
    e.preventDefault();
    signup(values);
  };
  return (
    <S.SignupContainer>
      <S.SignupBanner src='../../../public/assets/banner02.png' alt='banner' />
      <S.SignupFormContainer>
        <S.SignupHeader>
          <S.SignupLogo src='../../../public/assets/logo.png' alt='logo' />
          <p className='close' onClick={() => navigate('/login')}>
            X
          </p>
        </S.SignupHeader>
        <p className='title'>루팡 사원 계정 생성</p>
        <S.SignupForm onSubmit={HandleSubmit} onChange={HandleChange} id='form'>
          <div className='Container'>
            <div className='userName'>
              <p>사원명</p>
              <input type='text' name='username' placeholder='사원명' />
            </div>
            <div className='userJoinDate'>
              <p>입사 날짜</p>
              <input type='date' name='hireDate' placeholder='날짜 선택' />
            </div>
            <div className='userEmail'>
              <p>이메일 주소</p>
              <input type='text' name='email' placeholder='사용하실 이메일 주소' />
            </div>
            <div className='userPW'>
              <p>비밀번호</p>
              <input type='password' name='password' placeholder='사용하실 비밀번호' />
            </div>
            <div className='userConfirmPW'>
              <p>비밀번호 확인</p>
              <input type='password' name='checkPassword' placeholder='비밀번호 확인' />
            </div>
          </div>
          <S.BtnContainer>
            <button type='submit'>회원가입 하기</button>
          </S.BtnContainer>
        </S.SignupForm>
      </S.SignupFormContainer>
    </S.SignupContainer>
  );
}

export default SignupPage;
