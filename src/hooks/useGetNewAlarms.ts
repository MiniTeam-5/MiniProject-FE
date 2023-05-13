import { useQuery } from 'react-query';
import { getAlarms } from '../apis/auth';
import { useSelector } from 'react-redux';
import { IAlarm } from '../interfaces/alarm';
import { IRootState } from '../interfaces/store';

export const useGetNewAlarms = () => {
  const { data, error, isLoading } = useQuery('alarmList', getAlarms);
  const { id } = useSelector((state: IRootState) => state.loginedUser);
  const prevAlarms = useSelector((state: IRootState) => {
    return state.prevAlarms;
  });

  const alarmList: IAlarm[] | undefined = data?.data;
  // 이전 데이터가 없을 때, 즉 로그인을 처음한 유저일 때 alarmList 전체 출력
  // 이전 데이터가 있으면, 이전 데이터와 비교해서 새로운 데이터만 출력
  const newAlarms = () => {
    if (!alarmList || !id) return;
    const prevUserAlarms = prevAlarms[id];
    if (!prevUserAlarms) {
      const newAlarmList = alarmList.sort((a: IAlarm, b: IAlarm) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      return newAlarmList;
    }
    const newAlarmList = alarmList
      .filter((newAlarm: IAlarm) => {
        return !prevUserAlarms.some((prevAlarm: IAlarm) => prevAlarm.id === newAlarm.id);
      })
      .sort((a: IAlarm, b: IAlarm) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    return newAlarmList;
  };
  return { alarmList: newAlarms() || [], error, isLoading };
};
