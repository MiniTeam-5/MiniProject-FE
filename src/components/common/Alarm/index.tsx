import * as S from './styles';
import { MdClose } from 'react-icons/md';
import AlarmCard from './AlarmCard';
import { useQuery } from 'react-query';
import { getAlarms } from '../../../apis/auth';

function Alarm({ handleCloseAlarm }) {
  const { data: alarmList, error, isLoading } = useQuery('alarmList', getAlarms);
  // store에서 해당 유저의 알림 정보 가져오기
  // const alarmList = [
  //   {
  //     id: 1, //alarm id
  //     content: 'tomato,2023-05-05,2023-05-10,3,연차,승인',
  //     createdAt: '2023-05-06T17:14:50.4041531'
  //   },
  //   {
  //     id: 2, //alarm id
  //     content: 'tomato,2023-05-05,2023-05-10,3,연차,승인',
  //     createdAt: '2023-05-06T17:14:50.4041531'
  //   },
  //   {
  //     id: 3, //alarm id
  //     content: 'tomato,2023-05-12,2023-05-12,1,당직,승인',
  //     createdAt: '2023-05-12T10:14:50.4041531'
  //   },
  //   {
  //     id: 4, //alarm id
  //     content: 'tomato,2023-05-15,2023-05-16,2,연차,거절',
  //     createdAt: '2023-05-12T12:14:50.4041531'
  //   }
  // ];
  console.log(alarmList);
  if (isLoading || !alarmList.data) return <div>로딩중...</div>;
  return (
    <S.AlarmList>
      <S.Title>알림 목록</S.Title>
      <S.CloseBtn onClick={handleCloseAlarm}>
        <MdClose />
      </S.CloseBtn>
      <S.AlarmUl>
        {alarmList.data.map((alarm) => {
          <AlarmCard key={alarm.id} data={alarm} />;
        })}
      </S.AlarmUl>
    </S.AlarmList>
  );
}

export default Alarm;
