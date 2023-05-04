import { MouseEvent, useState } from 'react';
import ApplyCalendar from '../ApplyCalendar';
import * as S from './styles';
import { ICalendarInfo } from '../../../interfaces/applicationPage';
import { DateSelectArg } from '@fullcalendar/core/index.js';

function Application() {
  const [select, setSelect] = useState<'annual' | 'duty'>('annual');
  const [date, setDate] = useState({ start_date: '', end_date: '' });
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLButtonElement;
    const select = target.dataset.select as 'annual' | 'duty';
    if (select) {
      setSelect(select);
    }
  };
  const handleDateSelect = (date: DateSelectArg) => {
    if (select === 'duty') return;
    const { startStr, endStr } = date;
    console.log(startStr, endStr);
  };

  return (
    <S.Wrapper>
      <S.SelectBtns onClick={handleClick}>
        <S.SelectBtn data-select='annual' className={select === 'annual' ? 'active' : ''}>
          연차 신청
        </S.SelectBtn>
        <S.SelectBtn data-select='duty' className={select === 'duty' ? 'active' : ''}>
          당직 신청
        </S.SelectBtn>
      </S.SelectBtns>
      <ApplyCalendar select={select} handleDateSelect={handleDateSelect} />
    </S.Wrapper>
  );
}

export default Application;
