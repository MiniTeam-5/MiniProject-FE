import * as S from './styles';
import { MdClose } from 'react-icons/md';
import AlarmCard from './AlarmCard';
import { useQuery } from 'react-query';
import { getAlarms } from '../../../apis/auth';

function Alarm({ handleCloseAlarm }) {
  const { data: alarmList, error, isLoading } = useQuery('alarmList', getAlarms);
  const reorderedAlarmList = alarmList?.data?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  if (isLoading || !alarmList.data) return <div>로딩중...</div>;
  return (
    <S.AlarmList>
      <S.Title>알림 목록</S.Title>
      <S.CloseBtn onClick={handleCloseAlarm}>
        <MdClose />
      </S.CloseBtn>
      <S.AlarmUl>
        {reorderedAlarmList.map((alarm) => {
          return <AlarmCard key={alarm.id} data={alarm} />;
        })}
      </S.AlarmUl>
    </S.AlarmList>
  );
}

export default Alarm;
