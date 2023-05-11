import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { ICalendarProps } from '../../../interfaces/applicationPage';
import * as S from '../../common/ScheduleCalendar/styles';
import { useEffect, useRef, useState } from 'react';
import CalendarGuide from '../../common/CalendarGuide';
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js';
import useGetSchedule from '../../../hooks/useGetSchedule';
import { useSelector } from 'react-redux';

function ApplyCalendar({ select, applyDateSelect, resetDate }: ICalendarProps) {
  const today = new Date().toISOString().split('T')[0];
  const [nowMonth, setNowMonth] = useState(today.slice(0, 7));
  const { data, isLoading } = useGetSchedule(nowMonth, select);
  const [prevClickedDate, setPrevClickedDate] = useState<null | HTMLElement>(null);
  const { remainDays } = useSelector((state: any) => state.loginedUser);
  const calendarRef = useRef<FullCalendar>(null);
  const MySwal = withReactContent(Swal);

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

  const showAlert = (title: string) => {
    calendarRef.current?.getApi().unselect();
    resetDate();
    return MySwal.fire({
      icon: 'error',
      title
    });
  };
  const handleDateSelect = (date: DateSelectArg) => {
    if (date.startStr < today) {
      showAlert('오늘 이전 날짜는 선택할 수 없습니다.');
    }
    const selectDays = (() => {
      const startDate = new Date(date.startStr);
      const endDate = new Date(date.endStr);
      const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / oneDay);
      return diffDays + 1; // include start date
    })();
    if (selectDays > remainDays) {
      showAlert('잔여 연차 일수보다 많은 날짜를 선택할 수 없습니다.');
    }
    applyDateSelect(date);
  };

  // dateClick 이벤트 처리 함수
  const handleDateClick = (info: DateClickArg) => {
    if (select === 'ANNUAL') return;

    if (info.dateStr < today) {
      showAlert('오늘 이전 날짜는 선택할 수 없습니다.');
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
  // 이전/다음 버튼 클릭 이벤트 함수
  const handlePrevButtonClick = () => {
    const { current } = calendarRef;
    if (!current) return;
    const prevMonth = new Date(nowMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setNowMonth(prevMonth.toISOString().slice(0, 7));
    current.getApi().prev();
  };

  const handleNextButtonClick = () => {
    const { current } = calendarRef;
    if (!current) return;
    const nextMonth = new Date(nowMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setNowMonth(nextMonth.toISOString().slice(0, 7));
    current.getApi().next();
  };

  useEffect(() => {
    if (prevClickedDate !== null) {
      prevClickedDate.style.backgroundColor = '';
    }
  }, [select, prevClickedDate]);

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
            click: handlePrevButtonClick
          },
          next: {
            click: handleNextButtonClick
          }
        }}
      />
    </S.StyleWrapper>
  );
}

export default ApplyCalendar;
