import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import schedule from '../../../mockup/schedule_all.json';

function ApplyCalendar() {
  const duties = schedule.data.filter((item) => {
    if (item.type === 'duty') {
      return {
        title: item.username,
        start: item.start_date,
        end: item.end_date
      };
    }
  });
  const annuals = schedule.data.filter((item) => {
    if (item.type === 'annual') {
      return {
        title: item.username,
        start: item.start_date,
        end: item.end_date
      };
    }
    return;
  });

  if (!schedule.data) return <>loading...</>;
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      selectable={true}
      select={console.log}
    />
  );
}

export default ApplyCalendar;
