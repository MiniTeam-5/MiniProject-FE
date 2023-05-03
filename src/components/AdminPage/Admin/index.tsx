import { useEffect, useState } from 'react';
import * as S from './styles';

interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    status: boolean;
    profile: string;
    date: string;
    annual_limit: number;
    annual_count: number;
}


function Admin() {
    const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
        fetch('/src/mockup/user_all.json')
            .then(res => res.json())
            .then(data => setUsers(data.data))
            .catch(error => console.error('Error:', error));
    }, []);

  return (
    <S.Wrapper>
          <S.IndexDiv>
              <S.NameBox>사원명</S.NameBox>
              <S.RoleBox>직급</S.RoleBox>
              <S.DateBox>입사 날짜</S.DateBox>
              <S.AnnualBox>잔여 연차</S.AnnualBox>
          </S.IndexDiv>
          {users.map((user) => (
              <S.UserDiv key={user.id}>
                  <S.ProfileImg src="././public/assets/profile.png"/>
                  <S.NameBox>{user.username}</S.NameBox>
                  <S.RoleBox>{user.role === 'USER' ? '사원' : user.role === 'ADMIN' ? '관리자' : '마스터'}</S.RoleBox>
                  <S.DateBox>{user.date}</S.DateBox>
                  <S.AnnualBox>{user.annual_limit - user.annual_count}개<S.AdminBtn>관리</S.AdminBtn></S.AnnualBox>
              </S.UserDiv>))}
    </S.Wrapper>
  );
}

export default Admin;