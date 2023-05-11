import { useSelector } from 'react-redux';
import * as S from './styles';
import { MdClose } from 'react-icons/md';

function Alarm({ handleCloseAlarm }) {
  // store에서 해당 유저의 알림 정보 가져오기
  return (
    <S.AlarmList>
      <S.CloseBtn onClick={handleCloseAlarm}>
        <MdClose />
      </S.CloseBtn>
    </S.AlarmList>
  );
}

export default Alarm;
