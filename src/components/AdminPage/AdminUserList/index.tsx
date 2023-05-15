import React from 'react';
import * as S from './styles';
import { AdminUserListProps } from '../../../interfaces/user';

const AdminUserList: React.FC<AdminUserListProps> = ({
  index,
  users,
  user,
  loginUser,
  handleAdminClick,
  handleSaveClick,
  handleRoleChange,
  handlePlusMinusClick
  //openDeleteModal
}) => {
  return (
    <S.UserDiv style={index === users.length - 1 ? { borderRadius: '0 0 10px 10px' } : {}}>
      <S.ProfileImg src={user.profile} />
      <S.NameBox>{user.username}</S.NameBox>
      {user.isEditing && loginUser.role === 'ROLE_MASTER'
        ? //<S.DeleteBtn onClick={() => openDeleteModal(user.id)}>삭제</S.DeleteBtn>
          null
        : null}
      <S.RoleBox>
        {user.isEditing && loginUser.role === 'ROLE_MASTER' ? (
          <S.RoleSelect value={user.role} onChange={(event) => handleRoleChange(event, user.id)}>
            <option value='ROLE_USER'>사원</option>
            <option value='ROLE_ADMIN'>관리자</option>
            <option value='ROLE_MASTER'>마스터</option>
          </S.RoleSelect>
        ) : user.role === 'ROLE_USER' ? (
          '사원'
        ) : user.role === 'ROLE_ADMIN' ? (
          '관리자'
        ) : (
          '마스터'
        )}
      </S.RoleBox>
      <S.DateBox>{user.hireDate}</S.DateBox>
      <S.AnnualBox>
        {user.isEditing ? (
          <>
            <button onClick={() => handlePlusMinusClick(user.id, false)} style={{ marginLeft: '3px' }}>
              -
            </button>
            {user.remainDays}개<button onClick={() => handlePlusMinusClick(user.id, true)}>+</button>
          </>
        ) : (
          `${user.remainDays}개`
        )}
      </S.AnnualBox>
      <S.AdminBtn onClick={() => (user.isEditing ? handleSaveClick(user.id) : handleAdminClick(user.id))}>
        {user.isEditing ? '저장' : '관리'}
      </S.AdminBtn>
    </S.UserDiv>
  );
};

export default AdminUserList;
