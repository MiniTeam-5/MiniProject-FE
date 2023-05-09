import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as S from './styles';
import CalendarGuide from '../../common/CalendarGuide';
import PageTitle from '../../common/PageTitle';
import { useQuery } from 'react-query';
import { getSchedule } from '../../../apis/auth';

function ViewSchedule() {
  const { data } = useQuery(['user'], getSchedule, {
    onSuccess(data) {
      console.log(data);
    }
  });

  const schedule = data && data['data'];

  const scheduleDate = () => {
    const annualList = schedule?.filter((item: any) => item.type === 'annual');
    const dutyList = schedule?.filter((item: any) => item.type === 'duty');

    const annualResult = annualList?.map((item: any, index: number) => {
      const { start_date, end_date, status } = item;
      return {
        id: `annual-${index}`,
        start: new Date(start_date),
        end: new Date(end_date),
        allDay: true,
        extendedprops: { status }
      };
    });

    const dutyResult = dutyList?.map((item: any, index: number) => {
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

    return annualResult?.concat(dutyResult);
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
