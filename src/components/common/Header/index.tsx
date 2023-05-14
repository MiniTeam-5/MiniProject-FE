import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { GrPowerReset } from 'react-icons/gr';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.loginedUser.role);

  const refetchHandler = () => {
    if (user === 'ROLE_USER') queryClient.refetchQueries('schedule');
    else queryClient.refetchQueries('leaveList');
    queryClient.refetchQueries('schedules');
  };

  return (
    <S.Header>
      <S.Logo src='/assets/logo-blue.png' alt='lupin' />
      <S.Buttons>
        <S.ResetBtn onClick={refetchHandler}>
          새로고침
          <GrPowerReset />
        </S.ResetBtn>
        <S.AddPlanBtn
          onClick={() => {
            navigate('/application');
          }}
        >
          연차/당직 신청
        </S.AddPlanBtn>
      </S.Buttons>
    </S.Header>
  );
}

export default Header;
