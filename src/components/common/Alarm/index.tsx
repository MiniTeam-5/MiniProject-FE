import { useSelector } from 'react-redux';
import * as S from './styles';
import { MdClose } from 'react-icons/md';

function Alarm({ handleCloseAlarm }) {
  // store에서 해당 유저의 알림 정보 가져오기
  return (
    <S.AlarmList>
      <S.Title>알림 목록</S.Title>
      <S.CloseBtn onClick={handleCloseAlarm}>
        <MdClose />
      </S.CloseBtn>
      <S.AlarmUl>
        <S.AlarmLi>
          <p>연차 신청이 승인되었습니다.</p>
        </S.AlarmLi>
      </S.AlarmUl>
    </S.AlarmList>
  );
}

export default Alarm;
