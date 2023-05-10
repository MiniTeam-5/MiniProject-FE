import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { ICalendarProps } from '../../../interfaces/applicationPage';
import * as S from '../../common/ScheduleCalendar/styles';
import { useEffect, useRef, useState } from 'react';
import CalendarGuide from '../../common/CalendarGuide';
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js';
import useGetSchedule from '../../../hooks/useGetSchedule';

function ApplyCalendar({ select, applyDateSelect, resetDate }: ICalendarProps) {
  const today = new Date().toISOString().split('T')[0];
  const [nowMonth, setNowMonth] = useState(today.slice(0, 7));
  const { data, isLoading, error } = useGetSchedule(nowMonth, select);
  const [prevClickedDate, setPrevClickedDate] = useState<null | HTMLElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    if (prevClickedDate !== null) {
      prevClickedDate.style.backgroundColor = '';
    }
  }, [select]);

  // selectable 값을 선택에 따라 동적으로 변경
  const selectable = select === 'ANNUAL' ? true : false;
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
  const handleDateSelect = (date: DateSelectArg) => {
    if (date.startStr < today) {
      calendarRef.current?.getApi().unselect();
      resetDate();
      return alert('오늘 이전 날짜는 선택할 수 없습니다.');
    }
    applyDateSelect(date);
  };

  // 이전에 선택한 값
  // dateClick 이벤트 처리 함수
  const handleDateClick = (info: DateClickArg) => {
    if (select === 'ANNUAL') return;

    if (info.dateStr < today) {
      calendarRef.current?.getApi().unselect();
      resetDate();
      return alert('오늘 이전 날짜는 선택할 수 없습니다.');
    }
    // 클릭한 일자의 HTMLElement를 가져옴
    const clickedDateElement = info.dayEl;
    // 이전에 선택된 일자의 배경색을 원래대로 되돌림
    if (prevClickedDate !== null) {
      prevClickedDate.style.backgroundColor = '';
    }
    // 클릭한 일자의 배경색을 변경함
    clickedDateElement.style.backgroundColor = '#EAF8FA';
    // 이전에 선택된 일자를 저장함
    setPrevClickedDate(clickedDateElement);
    applyDateSelect(info);
  };

  if (isLoading) return <div>loading...</div>;
  return (
    <S.StyleWrapper>
      <CalendarGuide />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={data}
        selectable={selectable}
        select={handleDateSelect}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        customButtons={{
          prev: {
            click: () => {
              const prevMonth = new Date(nowMonth);
              prevMonth.setMonth(prevMonth.getMonth() - 1);
              setNowMonth(prevMonth.toISOString().slice(0, 7));
            }
          },
          next: {
            click: () => {
              const prevMonth = new Date(nowMonth);
              prevMonth.setMonth(prevMonth.getMonth() + 1);
              setNowMonth(prevMonth.toISOString().slice(0, 7));
            }
          }
        }}
      />
    </S.StyleWrapper>
  );
}

export default ApplyCalendar;
