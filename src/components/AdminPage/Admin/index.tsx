import { useEffect, useState } from 'react';
import * as S from './styles';
import { getUsers, changeRole, changeAnnual, resignUser } from '../../../apis/auth';

interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    profile: string;
    hireDate: string;
    remainDays: number;
    isEditing: boolean;
}


function Admin() {
    const [users, setUsers] = useState<User[]>([]);
    const [pages, setPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        getUsers(url)
            .then(data => {
                setUsers(data.data.content);
                setPages(data.data.totalPages);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    if (users === null) {
        return <p>Loading...</p>; // users가 null일 경우 로딩 상태를 표시
    }

    const handleAdminClick = (userId: number) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return {
                ...user,
                isEditing: true
                };
            } else {
                return user;
            }
        });
        setUsers(updatedUsers);
    };

    const handleSaveClick = (userId: number) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                changeAnnual(userId, user.remainDays);
                changeRole(userId, user.role);
                //changeRole(userId, user.role);
                return {
                    ...user,
                    isEditing: false
                };
            } else {
                return user;
            }
        });
        setUsers(updatedUsers);
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>, userId: number) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return {
                    ...user,
                    role: event.target.value
                };
            } else {
                return user;
            }
        });
        setUsers(updatedUsers);
    };

    const handleMinusClick = (userId: number) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return {
                ...user,
                remainDays: Math.max(user.remainDays - 1, 0)
                };
            } else {
                return user;
            }
        });
        setUsers(updatedUsers);
    };

    const handlePlusClick = (userId: number) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return {
                ...user,
                remainDays: user.remainDays + 1
                };
            } else {
                return user;
            }
        });
        setUsers(updatedUsers);
    };

    const handlePageClick = (page: number) => {
        if (page < 1) {
            page = 1;
        }
        if (page > pages) {
            page = pages;
        }
        
        if (currentPage === 1) {
            setUrl('');
        }
        else {
            setUrl(`?page=${page - 1}`);
        }
        setCurrentPage(page);
        getUsers(`?page=${page - 1}`)
            .then(data => setUsers(data.data.content))
            .catch(error => console.error('Error:', error));
    };

    const pageButtons = [];
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(
            <S.PageBtn key={i} onClick={() => handlePageClick(i)}>{i}</S.PageBtn>
        );
    }
              

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
                  <S.ProfileImg src={user.profile}/>
                  <S.NameBox>{user.username}</S.NameBox>
                  {user.isEditing ? (<S.DeleteBtn>삭제</S.DeleteBtn>):null}
                  <S.RoleBox>
                      {user.isEditing ? (
                        <S.RoleSelect value={user.role} onChange={(event) => handleRoleChange(event, user.id)}>
                            <option value="ROLE_USER">사원</option>
                            <option value="ROLE_ADMIN">관리자</option>
                            <option value="ROLE_MASTER">마스터</option>
                        </S.RoleSelect>
                        ) : (
                        user.role === 'ROLE_USER'
                            ? '사원'
                            : user.role === 'ROLE_ADMIN'
                            ? '관리자'
                            : '마스터'
                    )}
                  </S.RoleBox>
                  <S.DateBox>{user.hireDate}</S.DateBox>
                  <S.AnnualBox>
                      {user.isEditing ? (
                        <>
                            <button onClick={() => handleMinusClick(user.id)}>-</button>
                            {user.remainDays}개
                            <button onClick={() => handlePlusClick(user.id)}>+</button>
                        </>
                        ) : (
                        `${user.remainDays}개`
                        )}
                  </S.AnnualBox>
                  <S.AdminBtn onClick={()=> user.isEditing ? handleSaveClick(user.id) : handleAdminClick(user.id)}>{user.isEditing ? '저장' : '관리'}</S.AdminBtn>
                </S.UserDiv>))}
                <S.PageBtnBox>
                    {currentPage === 1 ? null :
                        <>
                        <S.PageBtn onClick={() => handlePageClick(1)}>&lt;&lt;</S.PageBtn>
                        <S.PageBtn onClick={() => handlePageClick(currentPage - 1)}>&lt;</S.PageBtn>
                        </>
                    }
                    {pageButtons}
                    {currentPage === pages ? null :
                        <>                        
                        <S.PageBtn onClick={() => handlePageClick(currentPage + 1)}>&gt;</S.PageBtn>
                        <S.PageBtn onClick={() => handlePageClick(pages)}>&gt;&gt;</S.PageBtn>
                        </>
                    }
                </S.PageBtnBox>
    </S.Wrapper>
  );
}

export default Admin;