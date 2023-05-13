import * as S from './styles';
import { MdClose } from 'react-icons/md';
import AlarmCard from './AlarmCard';
import { IAlarm, IAlarmProps } from '../../../interfaces/alarm';
import { useGetNewAlarms } from '../../../hooks/useGetNewAlarms';

function Alarm({ handleCloseAlarm }: IAlarmProps) {
  const { alarmList, isLoading } = useGetNewAlarms();
  const reorderedAlarmList = alarmList?.data?.sort((a: IAlarm, b: IAlarm) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  if (isLoading || !alarmList) return <div>로딩중...</div>;
  return (
    <S.AlarmList>
      <S.Title>알림 목록</S.Title>
      <S.CloseBtn onClick={handleCloseAlarm}>
        <MdClose />
      </S.CloseBtn>
      <S.AlarmUl>
        {reorderedAlarmList &&
          reorderedAlarmList.map((alarm: IAlarm) => {
            return <AlarmCard key={alarm.id} data={alarm} />;
          })}
      </S.AlarmUl>
      {alarmList.length === 0 && <S.InfoText>새로운 알림이 없습니다.</S.InfoText>}
    </S.AlarmList>
  );
}

export default Alarm;
