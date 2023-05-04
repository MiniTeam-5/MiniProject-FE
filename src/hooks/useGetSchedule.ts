import { useQuery } from 'react-query';
import { getSchedules } from '../apis/auth';
import { IUseScheduleQuery } from '../interfaces/common';
import { AxiosError } from 'axios';

function useGetSchedule(select?: 'annual' | 'duty') {
  const { data, isLoading, error } = useQuery<IUseScheduleQuery, AxiosError>('schedule', getSchedules);
  if (!data?.data) return { data: [], isLoading, error };

  const schedules = data['data'];
  const annualList = schedules.filter((item) => item.type === 'annual');
  const dutyList = schedules.filter((item) => item.type === 'duty');

  const scheduleData = () => {
    const annualResult = annualList.map((item, index) => {
      const { username, start_date, end_date } = item;
      return {
        id: `annual-${index}`,
        title: username,
        start: new Date(start_date),
        end: new Date(end_date)
        // extendedProps: { status }
      };
    });

    const dutyResult = dutyList.map((item, index) => {
      const { username, start_date, end_date } = item;

      return {
        id: `duty-${index}`,
        title: username,
        start: new Date(start_date),
        end: new Date(end_date),
        color: 'green',
        allDay: true
        // extendedProps: { status }
      };
    });

    return annualResult.concat(dutyResult);
  };

  return { data: scheduleData(), isLoading, error };
}

export default useGetSchedule;
