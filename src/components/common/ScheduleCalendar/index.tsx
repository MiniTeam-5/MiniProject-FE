import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as S from './styles';
import useGetSchedule from '../../../hooks/useGetSchedule';
import CalendarGuide from '../CalendarGuide';

function ScheduleCalendar() {
  const { data } = useGetSchedule();

  // 캘린더 이벤트 바 스타일
  // function renderEventContent(eventInfo: any) {
  //   const { status } = eventInfo.event.extendedProps;
  //   const backgroundColor = status === 'wait' ? 'hotpink' : '';

  //   return (
  //     <div className='fc-event-main' style={{ backgroundColor }}>
  //       <i>{eventInfo.event.title}</i>
  //     </div>
  //   );
  // }

  return (
    <S.StyleWrapper>
      <CalendarGuide />

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={data}
        // eventContent={renderEventContent}
      />
    </S.StyleWrapper>
  );
}

export default ScheduleCalendar;
