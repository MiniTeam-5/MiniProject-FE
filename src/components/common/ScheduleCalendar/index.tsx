import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as S from './styles';
import useGetSchedule from '../../../hooks/useGetSchedule';
import CalendarGuide from '../CalendarGuide';
import { EventContentArg } from '@fullcalendar/core';
import { useEffect, useRef } from 'react';
import { axiosInstance } from '../../../apis/instance';
import { SiMicrosoftexcel } from 'react-icons/si';

function ScheduleCalendar() {
  const { data } = useGetSchedule();
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    if (data) {
      calendarRef.current?.getApi().removeAllEventSources();
      calendarRef.current?.getApi().addEventSource(data);
    }
  }, [data]);

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

  const downloadHandler = async () => {
    const response = await axiosInstance().get('/auth/leave/download', {
      responseType: 'blob'
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'example.xlsx');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <S.StyleWrapper>
      <S.ExtraComponents>
        <S.FileDownloadButton type='button' onClick={downloadHandler}>
          <SiMicrosoftexcel className='excel-icon' />
          <p>엑셀로 저장하기</p>
        </S.FileDownloadButton>
        <CalendarGuide />
      </S.ExtraComponents>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={data}
        eventContent={renderEventContent}
        dayMaxEvents={2}
      />
    </S.StyleWrapper>
  );
}

export default ScheduleCalendar;
