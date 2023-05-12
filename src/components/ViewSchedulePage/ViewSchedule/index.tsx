import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as S from './styles';
import CalendarGuide from '../../common/CalendarGuide';
import PageTitle from '../../common/PageTitle';
import { useQuery } from 'react-query';
import { getSchedule } from '../../../apis/auth';

function ViewSchedule() {
  const { data } = useQuery(['user'], getSchedule, { staleTime: Infinity });

  const schedule = data && data['data'];

  const scheduleDate = () => {
    const annualList = schedule?.filter((item: any) => item.type === 'ANNUAL');
    const dutyList = schedule?.filter((item: any) => item.type === 'DUTY');

    const annualResult = annualList?.map((item: any) => {
      const { userId, startDate, endDate, status } = item;
      return {
        id: `annual-${userId}`,
        start: new Date(startDate),
        end: new Date(endDate),
        allDay: true,
        extendedProps: { status }
      };
    });

    const dutyResult = dutyList?.map((item: any) => {
      const { userId, startDate, endDate, status } = item;
      return {
        id: `duty-${userId}`,
        start: new Date(startDate),
        end: new Date(endDate),
        color: '#ba55d3',
        allDay: true,
        extendedProps: { status }
      };
    });

    return annualResult?.concat(dutyResult);
  };

  function renderEventContent(eventInfo: any) {
    const { status } = eventInfo.event.extendedProps;

    return <>{status === 'WAITING' && <strong>승인대기</strong>}</>;
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
