import * as S from './styles';
import { MdClose } from 'react-icons/md';
import AlarmCard from './AlarmCard';
import { IAlarm, IAlarmProps } from '../../../interfaces/alarm';

function Alarm({ data, handleCloseAlarm }: IAlarmProps) {
  const { prevAlarmList, newAlarmList } = data;
  const isDataExist = prevAlarmList.concat(newAlarmList).length > 0;
  return (
    <S.AlarmList>
      <S.Title>알림 목록</S.Title>
      <S.CloseBtn onClick={handleCloseAlarm}>
        <MdClose />
      </S.CloseBtn>
      <S.AlarmUl>
        {newAlarmList.map((alarm: IAlarm) => {
          return <AlarmCard key={alarm.id} data={alarm} alarmStatus='new' />;
        })}
        {prevAlarmList.map((alarm: IAlarm) => {
          return <AlarmCard key={alarm.id} data={alarm} alarmStatus='prev' />;
        })}
      </S.AlarmUl>
      {!isDataExist && <S.InfoText>새로운 알림이 없습니다.</S.InfoText>}
    </S.AlarmList>
  );
}

export default Alarm;
