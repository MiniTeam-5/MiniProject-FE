import { useEffect, useState, useRef } from 'react';
import * as S from './styles';
import {getUser, editUser} from '../../../apis/auth';

interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    status: boolean;
    profile: string;
    annual_limit: number;
    annual_count: number;
}

function EditProfile() {
    const [user, setUser] = useState<User | null>(null);
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileToDelete, setProfileToDelete] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        getUser()
            .then(data => {
                setUser(data.data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        console.log(user); // for debugging
    }, [user]); // this effect will run whenever the 'user' state changes

    if (user === null) {
    return <p>Loading...</p>;
    }

    const handleImgUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // 이전에 선택한 파일 초기화
            fileInputRef.current.click();
        }
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setImgFile(selectedFile);
        }
    }
    

    const handleImgDelete = () => {
        setImgFile(null);
        setProfileToDelete(user.profile);
        user.profile = 'https://lupinbucket.s3.ap-northeast-2.amazonaws.com/person.png';
    }

    const handleEdit = () => {
        if (newPassword !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const updatedUser = { ...user, password: newPassword, profile: imgFile};
        
        editUser(user.email, user.username, newPassword, confirmPassword, profileToDelete, imgFile)
            .then(response => {
                console.log('User updated successfully');
                setNewPassword('');
                setConfirmPassword('');
                setProfileToDelete('');
            })
            .catch(error => {
                console.error('Error updating user', error);
            })
    }

  return (
    <S.Wrapper>
          <S.ImageBox>프로필 사진
              <S.Image src={imgFile ? URL.createObjectURL(imgFile) : user.profile} />
              <S.ImgDelBtn onClick={handleImgDelete}>사진 삭제</S.ImgDelBtn>
              <S.ImgUploadBtn onClick={handleImgUpload}>사진 업로드</S.ImgUploadBtn>
              <input type="file" accept="image/*" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileInputChange} />
          </S.ImageBox>
          <S.NameBox>계정
              <S.NameSectionBox>
              <S.NameSection>이메일
                  <S.NameDiv>{ user.email }</S.NameDiv>
              </S.NameSection>
              <S.NameSection>사원명
                  <S.NameDiv>{ user.username }</S.NameDiv>
                  </S.NameSection>
                </S.NameSectionBox>
          </S.NameBox>
          <S.PwBox>비밀번호 변경
              <S.PwSectionBox>
              <S.PwSection>새로운 비밀번호
                  <S.PwInput type="password" placeholder='변경하실 비밀번호' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
              </S.PwSection>
              <S.PwSection>비밀번호 확인  
                  <S.PwInput type="password" placeholder='비밀번호 확인' style={{marginLeft: '66px'}} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
              </S.PwSection>
              </S.PwSectionBox>
          </S.PwBox>
          <S.BtnBox>
            <S.CancelBtn>취소</S.CancelBtn>
            <S.EditBtn onClick={handleEdit}>수정 완료</S.EditBtn>
          </S.BtnBox>
    </S.Wrapper>
  );
}

export default EditProfile;