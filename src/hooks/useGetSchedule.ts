import { useQuery } from 'react-query';
import { getSchedules } from '../apis/auth';
import { IUseScheduleQuery } from '../interfaces/common';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

function useGetSchedule(select?: 'annual' | 'duty') {
  const { data, isLoading, error } = useQuery<IUseScheduleQuery, AxiosError>('schedules', getSchedules, {
    staleTime: Infinity
  });
  const userId = 1; // store에서 가져오기
  const { pathname } = useLocation();
  if (!data?.data) return { data: [], isLoading, error };

  const schedules = data['data'];
  // annual -> 모든 사람 연차 + 내 당직
  // duty -> 내 연차 + 내 당직
  const annualList = schedules.filter((item: any) => {
    if (select === 'duty' || pathname === '/viewSchedule') return item.type === 'ANNUAL' && item.id === userId;
    return item.type === 'ANNUAL';
  });
  const dutyList = schedules.filter((item: any) => {
    if (select || pathname === '/viewSchedule') return item.type === 'DUTY' && item.id === userId;
    return item.type === 'DUTY';
  });

  const scheduleData = () => {
    const annualResult = annualList.map((item) => {
      // TODO: 관련 인터페이스 수정하기
      const { userId, username, startDate, endDate, status } = item;
      return {
        id: `annual-${userId}`,
        title: username,
        start: new Date(startDate),
        end: new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000),
        allDay: true,
        extendedProps: { status }
      };
    });

    const dutyResult = dutyList.map((item) => {
      const { userId, username, startDate, endDate, status } = item;
      return {
        id: `duty-${userId}`,
        title: username,
        start: new Date(startDate),
        end: new Date(new Date(endDate).getTime() + 24 * 60 * 60 * 1000),
        color: '#ba55d3',
        allDay: true,
        extendedProps: { status }
      };
    });
    return annualResult.concat(dutyResult);
  };

  return { data: scheduleData(), isLoading, error };
}

export default useGetSchedule;
