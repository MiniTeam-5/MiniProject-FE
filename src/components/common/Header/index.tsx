import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { GrPowerReset } from 'react-icons/gr';
function Header() {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.Logo src='/assets/logo-blue.png' alt='lupin' />
      <S.Buttons>
        <S.ResetBtn
          onClick={() => {
            // refetch하는 로직
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
