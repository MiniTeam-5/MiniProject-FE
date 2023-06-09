import { useEffect, useState, useRef } from 'react';
import * as S from './styles';
import { getUser, editUser } from '../../../apis/auth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProfileImg } from '../../../store/reducers/userReducers';

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
  const EditSwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  if (user === null) {
    return <p>Loading...</p>;
  }

  const handleImgUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // 이전에 선택한 파일 초기화
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImgFile(selectedFile);
    }
  };

  const handleImgDelete = () => {
    setImgFile(null);
    setProfileToDelete(user.profile);
    user.profile = 'https://lupinbucket.s3.ap-northeast-2.amazonaws.com/person.png';
  };

  const openModal = () => {
    return EditSwal.fire({
      icon: 'success',
      title: '프로필이 수정되었습니다.',
      confirmButtonColor: '#0675E5',
      confirmButtonText: '확인'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('User edited successfully');
        navigate('/');
      }
    });
  };

  const handleEdit = () => {
    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const editUserData = {
      email: user.email,
      username: user.username,
      newPassword: newPassword,
      checkPassword: confirmPassword,
      profileToDelete: profileToDelete,
      profile: imgFile
    };

    editUser(editUserData)
      .then(() => {
        setNewPassword('');
        setConfirmPassword('');
        setProfileToDelete('');
        if (editUserData.profile) {
          dispatch(setProfileImg(URL.createObjectURL(editUserData.profile)));
        } else {
          dispatch(setProfileImg(user.profile));
        }
        openModal();
      })
      .catch((error) => {
        console.error('Error updating user', error);
      });
  };

  const handleCancel = () => {
    setNewPassword('');
    setConfirmPassword('');
    setProfileToDelete('');
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.ImageBox>
        프로필 사진
        <S.Image src={imgFile ? URL.createObjectURL(imgFile) : user.profile} />
        <S.ImgDelBtn onClick={handleImgDelete}>사진 삭제</S.ImgDelBtn>
        <S.ImgUploadBtn onClick={handleImgUpload}>사진 업로드</S.ImgUploadBtn>
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
      </S.ImageBox>
      <S.NameBox>
        계정
        <S.NameSectionBox>
          <S.NameSection>
            이메일
            <S.NameDiv>{user.email}</S.NameDiv>
          </S.NameSection>
          <S.NameSection>
            사원명
            <S.NameDiv>{user.username}</S.NameDiv>
          </S.NameSection>
        </S.NameSectionBox>
      </S.NameBox>
      <S.PwBox>
        비밀번호 변경
        <S.PwSectionBox>
          <S.PwSection>
            새로운 비밀번호
            <S.PwInput
              type='password'
              placeholder='변경하실 비밀번호'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </S.PwSection>
          <S.PwSection>
            비밀번호 확인
            <S.PwInput
              type='password'
              placeholder='비밀번호 확인'
              style={{ marginLeft: '66px' }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </S.PwSection>
        </S.PwSectionBox>
      </S.PwBox>
      <S.BtnBox>
        <S.CancelBtn onClick={handleCancel}>취소</S.CancelBtn>
        <S.EditBtn onClick={handleEdit}>수정 완료</S.EditBtn>
      </S.BtnBox>
    </S.Wrapper>
  );
}

export default EditProfile;
