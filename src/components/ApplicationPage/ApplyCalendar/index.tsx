import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { ICalendarProps } from '../../../interfaces/applicationPage';
import useGetSchedule from '../../../hooks/useGetSchedule';
import * as S from '../../common/ScheduleCalendar/styles';
import { useEffect, useState } from 'react';

function ApplyCalendar({ select, handleDateSelect }: ICalendarProps) {
  const { data, isLoading, error } = useGetSchedule(select);
  const [prevClickedDate, setPrevClickedDate] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (prevClickedDate !== null) {
      prevClickedDate.style.backgroundColor = '';
    }
  }, [select]);

  // selectable 값을 선택에 따라 동적으로 변경
  const selectable = select === 'annual' ? true : false;

  // 이전에 선택한 값
  // dateClick 이벤트 처리 함수
  const handleDateClick = (info: DateClickArg) => {
    if (select === 'annual') return;
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
    handleDateSelect(info);
  };

  if (isLoading) return <div>loading...</div>;
  return (
    <S.StyleWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={data}
        selectable={selectable}
        select={(info) => handleDateSelect(info)}
        dateClick={handleDateClick}
      />
    </S.StyleWrapper>
  );
}

export default ApplyCalendar;
