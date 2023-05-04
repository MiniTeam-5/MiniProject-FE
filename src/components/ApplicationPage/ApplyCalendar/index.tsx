import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ICalendarProps } from '../../../interfaces/applicationPage';
import useGetSchedule from '../../../hooks/useGetSchedule';

function ApplyCalendar({ select, handleDateSelect }: ICalendarProps) {
  const { data, isLoading, error } = useGetSchedule();
  console.log(data);
  if (isLoading) return <div>loading...</div>;
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      selectable={true}
      select={(info) => handleDateSelect(info)}
    />
  );
}

export default ApplyCalendar;
