import { MouseEvent, useState } from 'react';
import ApplyCalendar from '../ApplyCalendar';
import * as S from './styles';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { DateClickArg } from '@fullcalendar/interaction/index.js';
import ApplyInfo from '../ApplyInfo';

function Application() {
  const [select, setSelect] = useState<'ANNUAL' | 'DUTY'>('ANNUAL');
  const [date, setDate] = useState({ startDate: '', endDate: '' });

  const resetDate = () => {
    setDate({ startDate: '', endDate: '' });
  };
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLButtonElement;
    const select = target.dataset.select as 'ANNUAL' | 'DUTY';
    if (select) {
      setSelect(select);
      resetDate();
    }
  };
  const handleDateSelect = (date: DateSelectArg | DateClickArg) => {
    if (select === 'DUTY') {
      const { dateStr } = date as DateClickArg;
      setDate({ startDate: dateStr, endDate: dateStr });
      return;
    }
    const { startStr, endStr } = date as DateSelectArg;
    setDate({
      startDate: startStr,
      // fullCalendar에서 endStr은 선택한 날짜의 다음날을 가리킴 -> 해당 오류 수정
      endDate: new Date(new Date(endStr).getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    });
  };

  return (
    <S.Wrapper>
      <S.SelectBtns onClick={handleClick}>
        <S.SelectBtn data-select='ANNUAL' className={select === 'ANNUAL' ? 'active' : ''}>
          연차 신청
        </S.SelectBtn>
        <S.SelectBtn data-select='DUTY' className={select === 'DUTY' ? 'active' : ''}>
          당직 신청
        </S.SelectBtn>
      </S.SelectBtns>
      <ApplyCalendar select={select} applyDateSelect={handleDateSelect} resetDate={resetDate} />
      {date.startDate && date.endDate && <ApplyInfo select={select} date={date} />}
    </S.Wrapper>
  );
}

export default Application;
