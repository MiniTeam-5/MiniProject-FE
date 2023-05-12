import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as S from './styles';
import useGetSchedule from '../../../hooks/useGetSchedule';
import CalendarGuide from '../CalendarGuide';
import { EventContentArg } from '@fullcalendar/core';

function ScheduleCalendar() {
  const { data } = useGetSchedule();

  // 캘린더 이벤트 바 스타일
  function renderEventContent(eventInfo: EventContentArg) {
    const { status } = eventInfo.event.extendedProps;

    return (
      <>
        {status === 'WAITING' && <strong>승인대기</strong>}
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <S.StyleWrapper>
      <CalendarGuide />

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={data}
        eventContent={renderEventContent}
        dayMaxEvents={2}
      />
    </S.StyleWrapper>
  );
}

export default ScheduleCalendar;
