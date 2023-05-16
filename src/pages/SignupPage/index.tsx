import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import * as S from './styles';
import { useSignup } from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignupPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({ mode: 'onChange' });

  const signup = useSignup();

  const onSubmit = (data: any) => {
    if (Object.keys(errors).length === 0) {
      signup(data);
    }
  };

  return (
    <S.SignupContainer>
      <S.SignupBanner src='assets/banner02.png' alt='banner' />
      <S.SignupFormContainer>
        <S.SignupHeader>
          <S.SignupLogo src='assets/logo.png' alt='logo' />
          <p className='close' onClick={() => navigate('/login')}>
            <MdClose />
          </p>
        </S.SignupHeader>
        <p className='title'>루팡 사원 계정 생성</p>
        <S.SignupForm onSubmit={handleSubmit(onSubmit)} id='form'>
          <div className='Container'>
            <div className='userName'>
              <label>사원명</label>
              <input
                type='text'
                placeholder='사원명'
                {...register('username', {
                  required: true,
                  maxLength: { value: 5, message: '5자 이하의 이름만 사용가능합니다.' },
                  pattern: { value: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/, message: '한글만 입력 가능합니다.' }
                })}
              />
              {errors.username?.type === 'maxLength' && <p>{String(errors.username?.message)}</p>}
              {errors.username?.type === 'pattern' && <p>{String(errors.username?.message)}</p>}
            </div>
            <div className='userJoinDate'>
              <label>입사 날짜</label>
              <input type='date' placeholder='날짜 선택' {...register('hireDate', { required: true })} />
              {errors.hireDate && <p>입사 날짜를 선택해주세요</p>}
            </div>
            <div className='userEmail'>
              <label>이메일 주소</label>
              <input
                type='text'
                placeholder='사용하실 이메일 주소'
                {...register('email', {
                  required: true,
                  pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
                })}
              />
              {errors.email?.type === 'pattern' && <p>유효한 이메일 주소를 입력해주세요</p>}
            </div>
            <div className='userPW'>
              <label>비밀번호</label>
              <input
                id='password'
                type='password'
                placeholder='사용하실 비밀번호'
                {...register('password', { required: true, minLength: 2 })}
              />
              {errors.password && <p>비밀번호를 입력해주세요</p>}
              {errors.password?.type === 'minLength' && <p>비밀번호는 최소 2자 이상이어야 합니다</p>}
            </div>
            <div className='userConfirmPW'>
              <label>비밀번호 확인</label>
              <input
                type='password'
                placeholder='비밀번호 확인'
                {...register('checkPassword', {
                  required: true,
                  validate: (value) => value === watch('password')
                })}
              />
              {errors.checkPassword && <p>비밀번호가 일치하지 않습니다</p>}
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
