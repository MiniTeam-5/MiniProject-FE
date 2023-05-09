import { useQuery } from 'react-query';
import { getSchedules } from '../apis/auth';
import { IUseScheduleQuery } from '../interfaces/common';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

function useGetSchedule(select?: 'annual' | 'duty') {
  const { data, isLoading, error } = useQuery<IUseScheduleQuery, AxiosError>('schedule', getSchedules);
  const userId = 1; // store에서 가져오기
  const { pathname } = useLocation();
  if (!data?.data) return { data: [], isLoading, error };

  const schedules = data['data'];
  // annual -> 모든 사람 연차 + 내 당직
  // duty -> 내 연차 + 내 당직
  const annualList = schedules.filter((item) => {
    if (select === 'duty' || pathname === '/viewSchedule') return item.type === 'annual' && item.id === userId;
    return item.type === 'annual';
  });
  const dutyList = schedules.filter((item) => {
    // select가 무엇이 되었든간에 내 당직 정보만 보여줘야 함
    if (select || pathname === '/viewSchedule') return item.type === 'duty' && item.id === userId;
    return item.type === 'duty';
  });

  const scheduleData = () => {
    const annualResult = annualList.map((item, index) => {
      const { username, start_date, end_date, status } = item;
      return {
        id: `annual-${index}`,
        title: username,
        start: new Date(start_date),
        end: new Date(end_date),
        allDay: true,
        extendedProps: { status }
      };
    });

    const dutyResult = dutyList.map((item, index) => {
      const { username, start_date, end_date, status } = item;
      return {
        id: `duty-${index}`,
        title: username,
        start: new Date(start_date),
        end: new Date(end_date),
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
