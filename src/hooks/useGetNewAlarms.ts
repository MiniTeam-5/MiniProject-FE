import { useQuery } from 'react-query';
import { getAlarms } from '../apis/auth';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAlarmList } from '../store/reducers/alarmReducers';
import { IAlarm } from '../interfaces/alarm';

export const useGetNewAlarms = () => {
  const { data, error, isLoading } = useQuery('alarmList', getAlarms);
  const { id } = useSelector((state: any) => state.loginedUser);
  const dispatch = useDispatch();
  const prevAlarms = useSelector((state: any) => {
    return state.prevAlarms;
  });
  const alarmList = data?.data;
  // 이전 데이터가 없을 때, 즉 로그인을 처음한 유저일 때 alarmList 전체 출력
  // 이전 데이터가 있으면, 이전 데이터와 비교해서 새로운 데이터만 출력
  const newAlarms = () => {
    if (!alarmList || !id) return;
    dispatch(setAlarmList({ id, alarmList }));
    const prevUserAlarms = prevAlarms[id];
    if (!prevUserAlarms) return alarmList;
    const newAlarmList = alarmList.filter((newAlarm: IAlarm) => {
      !prevUserAlarms.some((prevAlarm: IAlarm) => prevAlarm.id === newAlarm.id);
    });
    return newAlarmList;
  };
  return { alarmList: newAlarms(), error, isLoading };
};
