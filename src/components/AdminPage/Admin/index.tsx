import { useEffect, useState } from 'react';
import * as S from './styles';
import { getUsers, changeRole, changeAnnual, resignUser, getSearchData } from '../../../apis/auth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useSelector } from 'react-redux';
import { UserList } from '../../../interfaces/user';
import { ILoginedUser } from '../../../interfaces/store';
import AdminUserList from '../AdminUserList';
import { useQuery } from 'react-query';

function Admin() {
  const [users, setUsers] = useState<UserList[]>([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const DeleteSwal = withReactContent(Swal);

  const loginUser: ILoginedUser = useSelector((state: any) => state.loginedUser);

  useEffect(() => {
    getUsers(url)
      .then((data) => {
        setUsers(data.data.content);
        setPages(data.data.totalPages);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  if (users === null) {
    return <p>Loading...</p>; // users가 null일 경우 로딩 상태를 표시
  }

  const handleAdminClick = (userId: number) => {
    const updatedUsers = users.map((user) => {
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
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        changeAnnual(userId, user.remainDays);
        if (loginUser.role === 'ROLE_MASTER') {
          changeRole(userId, user.role);
        }
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
    const updatedUsers = users.map((user) => {
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
    const updatedUsers = users.map((user) => {
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
    const updatedUsers = users.map((user) => {
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
    } else {
      setUrl(`?page=${page - 1}`);
    }
    setCurrentPage(page);
    getUsers(`?page=${page - 1}`)
      .then((data) => setUsers(data.data.content))
      .catch((error) => console.error('Error:', error));
  };

  const pageButtons = [];
  let startPage = 1;
  let endPage = pages;
  if (pages > 5) {
    if (currentPage < 3) {
      endPage = 5;
    } else if (currentPage > pages - 2) {
      startPage = pages - 4;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <S.PageBtn key={i} isActive={i === currentPage} onClick={() => handlePageClick(i)}>
        {i}
      </S.PageBtn>
    );
  }

  const handleSearchClick = () => {
    const encodedSearchValue = encodeURI(searchValue);
    getSearchData(encodedSearchValue)
      .then((data) => {
        setUsers(data.data.content);
        setPages(data.data.totalPages);
      })
      .catch((error) => console.error('Error:', error));

    setSearchValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleDeleteClick = (userId: number) => {
    resignUser(userId);
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const openDeleteModal = (userId: number) => {
    return DeleteSwal.fire({
      icon: 'warning',
      title: '정말 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonColor: '#0675E5',
      cancelButtonColor: '#CBCCD7',
      confirmButtonText: '삭제',
      cancelButtonText: '취소'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteClick(userId);
        Swal.fire('삭제가 완료되었습니다.', '', 'success');
      }
    });
  };

  return (
    <S.Wrapper>
      <S.SearchBox>
        <S.SearchIcon src='/assets/ic_round-search.png' />
        <S.SearchInput onChange={(e) => setSearchValue(e.target.value)} onKeyPress={handleKeyPress} />
        <S.SearchBtn onClick={() => handleSearchClick()}>검색</S.SearchBtn>
      </S.SearchBox>
      <S.IndexDiv>
        <S.NameBox>사원명</S.NameBox>
        <S.RoleBox>직급</S.RoleBox>
        <S.DateBox>입사 날짜</S.DateBox>
        <S.AnnualBox>잔여 연차</S.AnnualBox>
      </S.IndexDiv>
      {users.map((user, index) => (
        <AdminUserList
          key={user.id}
          index={index}
          users={users}
          user={user}
          loginUser={loginUser}
          handleAdminClick={handleAdminClick}
          handleSaveClick={handleSaveClick}
          handleRoleChange={handleRoleChange}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
          handleDeleteClick={handleDeleteClick}
          openDeleteModal={openDeleteModal}
        />
      ))}
      <S.PageBtnBox>
        {currentPage === 1 ? (
          <>
            <S.inActivePageBtn>≪</S.inActivePageBtn>
            <S.inActivePageBtn>&lt;</S.inActivePageBtn>
          </>
        ) : (
          <>
            <S.PageBtn isActive={false} onClick={() => handlePageClick(1)}>
              ≪
            </S.PageBtn>
            <S.PageBtn isActive={false} onClick={() => handlePageClick(currentPage - 1)}>
              &lt;
            </S.PageBtn>
          </>
        )}
        {pageButtons}
        {currentPage === pages ? (
          <>
            <S.inActivePageBtn>&gt;</S.inActivePageBtn>
            <S.inActivePageBtn>≫</S.inActivePageBtn>
          </>
        ) : (
          <>
            <S.PageBtn isActive={false} onClick={() => handlePageClick(currentPage + 1)}>
              &gt;
            </S.PageBtn>
            <S.PageBtn isActive={false} onClick={() => handlePageClick(pages)}>
              ≫
            </S.PageBtn>
          </>
        )}
      </S.PageBtnBox>
    </S.Wrapper>
  );
}

export default Admin;
