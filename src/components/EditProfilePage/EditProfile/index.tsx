import { useEffect, useState } from 'react';
import * as S from './styles';

function EditProfile() {
    

  return (
    <S.Wrapper>
          <S.ImageBox>프로필 사진
              <S.Image src="././public/assets/profile.png"/>
              <S.ImgDelBtn>사진 삭제</S.ImgDelBtn>
              <S.ImgUploadBtn>사진 업로드</S.ImgUploadBtn>
          </S.ImageBox>
          <S.NameBox>계정
              <S.NameSection>이메일
                  <S.NameInput type="text"/>
              </S.NameSection>
              <S.NameSection>사원명
                  <S.NameInput type="text"/>
              </S.NameSection>
          </S.NameBox>
          <S.PwBox>비밀번호 변경
              <S.PwSection>새로운 비밀번호
                  <S.PwInput type="password" placeholder='변경하실 비밀번호'/>
              </S.PwSection>
              <S.PwSection>비밀번호 확인
                  <S.PwInput type="password" placeholder='비밀번호 확인'/>
              </S.PwSection>
          </S.PwBox>
          <S.BtnBox>
            <S.CancelBtn>취소</S.CancelBtn>
            <S.EditBtn>수정 완료</S.EditBtn>
          </S.BtnBox>
    </S.Wrapper>
  );
}

export default EditProfile;