import { MouseEvent, useState } from 'react';
import ApplyCalendar from '../ApplyCalendar';
import * as S from './styles';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { DateClickArg } from '@fullcalendar/interaction/index.js';
import ApplyInfo from '../ApplyInfo';

function Application() {
  const [select, setSelect] = useState<'annual' | 'duty'>('annual');
  const [date, setDate] = useState({ start_date: '', end_date: '' });

  const resetDate = () => {
    setDate({ start_date: '', end_date: '' });
  };
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLButtonElement;
    const select = target.dataset.select as 'annual' | 'duty';
    if (select) {
      setSelect(select);
      resetDate();
    }
  };
  const handleDateSelect = (date: DateSelectArg | DateClickArg) => {
    if (select === 'duty') {
      const { dateStr } = date as DateClickArg;
      setDate({ start_date: dateStr, end_date: dateStr });
      return;
    }
    const { startStr, endStr } = date as DateSelectArg;
    setDate({
      start_date: startStr,
      // fullCalendar에서 endStr은 선택한 날짜의 다음날을 가리킴 -> 해당 오류 수정
      end_date: new Date(new Date(endStr).getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    });
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
      <ApplyCalendar select={select} applyDateSelect={handleDateSelect} resetDate={resetDate} />
      {date.start_date && date.end_date && <ApplyInfo select={select} date={date} />}
    </S.Wrapper>
  );
}

export default Application;
