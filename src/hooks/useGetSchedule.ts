import { useQuery } from 'react-query';
import { getSchedules } from '../apis/auth';
import { IUseScheduleQuery } from '../interfaces/common';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useGetSchedule(select?: 'ANNUAL' | 'DUTY') {
  const { data, isLoading, error } = useQuery<IUseScheduleQuery, AxiosError>(['schedules'], getSchedules, {
    refetchOnWindowFocus: false
    // staleTime: Infinity
  });
  const { id } = useSelector((state: any) => state.loginedUser);
  const { pathname } = useLocation();

  if (isLoading || !data?.data) return { data: [], isLoading, error };

  const schedules = data.data;
  // ANNUAL -> 모든 사람 연차 + 내 당직
  // DUTY -> 내 연차 + 내 당직
  const annualList = schedules.filter((item) => {
    if (item.status === 'REJECTION') return;
    if (select === 'DUTY' || pathname === '/viewSchedule') return item.type === 'ANNUAL' && item.userId === id;
    return item.type === 'ANNUAL';
  });
  const dutyList = schedules.filter((item) => {
    // select가 무엇이 되었든간에 내 당직 정보만 보여줘야 함
    if (item.status === 'REJECTION') return;
    if (select || pathname === '/viewSchedule') return item.type === 'DUTY' && item.userId === id;
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
