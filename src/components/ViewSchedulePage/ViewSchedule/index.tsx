import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import temp from '../../../mockup/schedule_login.json';
import * as S from './styles';
import CalendarGuide from '../../common/CalendarGuide';
import PageTitle from '../../common/PageTitle';

function ViewSchedule() {
  const scheduleDate = () => {
    const annualList = temp.data.filter((item) => item.type === 'annual');
    const dutyList = temp.data.filter((item) => item.type === 'duty');

    const annualResult = annualList.map((item, index) => {
      const { start_date, end_date, status } = item;
      return {
        id: `annual-${index}`,
        start: new Date(start_date),
        end: new Date(end_date),
        extendedprops: { status }
      };
    });

    const dutyResult = dutyList.map((item, index) => {
      const { start_date, end_date, status } = item;
      return {
        id: `duty-${index}`,
        start: new Date(start_date),
        end: new Date(end_date),
        color: '#ba55d3',
        allDay: true,
        extendedprops: { status }
      };
    });

    return annualResult.concat(dutyResult);
  };

  function renderEventContent(eventInfo: any) {
    const { status } = eventInfo.event.extendedProps;

    return <>{status === 'wait' && <strong>승인대기</strong>}</>;
  }

  return (
    <>
      <PageTitle title='내 일정 보기' />
      <S.StyleWrapper>
        <CalendarGuide />

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          events={scheduleDate()}
          eventContent={renderEventContent}
        />
      </S.StyleWrapper>
    </>
  );
}

export default ViewSchedule;