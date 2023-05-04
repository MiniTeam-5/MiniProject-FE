import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ICalendarProps } from '../../../interfaces/applicationPage';
import useGetSchedule from '../../../hooks/useGetSchedule';
import * as S from '../../common/ScheduleCalendar/styles';

function ApplyCalendar({ select, handleDateSelect }: ICalendarProps) {
  const { data, isLoading, error } = useGetSchedule(select);
  if (isLoading) return <div>loading...</div>;
  return (
    <S.StyleWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={data}
        selectable={true}
        select={(info) => handleDateSelect(info)}
      />
    </S.StyleWrapper>
  );
}

export default ApplyCalendar;
