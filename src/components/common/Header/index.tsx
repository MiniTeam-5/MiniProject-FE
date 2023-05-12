import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { GrPowerReset } from 'react-icons/gr';
import { useQueryClient } from 'react-query';
import temp from '../../../mockup/user_login.json';
function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const user = temp.data[1].role;

  return (
    <S.Header>
      <S.Logo src='/assets/logo-blue.png' alt='lupin' />
      <S.Buttons>
        <S.ResetBtn
          onClick={() => {
            // refetch하는 로직
            queryClient.refetchQueries('leaveList');
          }}
        >
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
