import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import temp from '../../../mockup/schedule_all.json';
import * as S from './styles';

function index() {
  const annualList = temp.data.filter((item) => item.type === 'annual');
  const dutyList = temp.data.filter((item) => item.type === 'duty');

  const scheduleData = async () => {
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
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={scheduleData}
        // eventContent={renderEventContent}
      />
    </S.StyleWrapper>
  );
}

export default index;
