import { useQuery } from 'react-query';
import { getAlarms } from '../apis/auth';
import { useSelector } from 'react-redux';
import { IAlarm } from '../interfaces/alarm';
import { IRootState } from '../interfaces/store';
import { useAlarm } from '../store/reducers/alarmSlice';
import _ from 'lodash';

export const useGetNewAlarms = () => {
  const { id } = useSelector((state: IRootState) => state.loginedUser);
  const { data, error, isLoading, refetch } = useQuery('newAlarms', getAlarms, {
    enabled: !!id
  });
  // 스토어에 저장된 이전 알람 데이터를 가져옴
  const { data: prevAlarms } = useAlarm();
  const alarmList: IAlarm[] | undefined = data?.data;
  // 이전 데이터가 없을 때, 즉 로그인을 처음한 유저일 때 alarmList 전체 출력
  // 이전 데이터가 있으면, 이전 데이터와 비교해서 새로운 데이터만 출력

  const storedList = prevAlarms[id];
  const prevAlarmList = storedList
    ? [...storedList].sort((a: IAlarm, b: IAlarm) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      })
    : [];

  const newAlarms = () => {
    if (!alarmList || !id) return;
    const filteredList = _(alarmList)
      // groupBy : 배열 데이터를 leaveId를 기준으로 그룹으로 묶어서 key, value 형태로 만들어줌
      .groupBy('leaveId')
      // map과 maxBy를 이용해서 중복 데이터 중 createdAt이 가장 큰 데이터, 즉 최신 데이터만 뽑아냄
      .map((group) => _.maxBy(group, 'createdAt'))
      // value()를 이용해서 객체를 배열 형태로 만들어줌
      .value() as IAlarm[];

    const newAlarmList = filteredList
      .filter((newAlarm: IAlarm) => {
        return !prevAlarmList.some((prevAlarm: IAlarm) => prevAlarm.id === newAlarm.id);
      })
      .sort((a: IAlarm, b: IAlarm) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    return { prevAlarmList, newAlarmList };
  };
  return { alarmList: newAlarms(), error, isLoading, refetch };
};
