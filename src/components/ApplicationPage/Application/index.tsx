import { MouseEvent, useState } from 'react';
import ApplyCalendar from '../ApplyCalendar';
import * as S from './styles';
import { DateSelectArg } from '@fullcalendar/core/index.js';

function Application() {
  const [select, setSelect] = useState<'annual' | 'duty'>('annual');
  const [date, setDate] = useState({ start_date: '', end_date: '' });

  const selectText = select === 'annual' ? '연차' : '당직';
  const selectDays = (() => {
    if (!date.start_date || !date.end_date) return 0;
    const startDate = new Date(date.start_date);
    const endDate = new Date(date.end_date);
    const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / oneDay);
    return diffDays + 1; // include start date
  })();
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
      <ApplyCalendar select={select} handleDateSelect={handleDateSelect} />
      <S.ApplyInfo>
        <S.ApplyInfoTitle>{selectText} 신청 정보</S.ApplyInfoTitle>
        <S.ApplyInfoContent>
          신청 날짜 : {date.start_date} ~ {date.end_date}
        </S.ApplyInfoContent>
        <S.ApplyInfoContent>신청 일수 : {selectDays}일</S.ApplyInfoContent>
      </S.ApplyInfo>
    </S.Wrapper>
  );
}

export default Application;
