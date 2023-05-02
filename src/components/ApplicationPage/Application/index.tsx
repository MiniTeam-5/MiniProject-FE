import { MouseEvent, useState } from 'react';
import ApplyCalendar from '../ApplyCalendar';
import * as S from './styles';

function Application() {
  const [select, setSelect] = useState('annual');

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLButtonElement;
    const select = target.dataset.select;
    if (select) {
      setSelect(select);
    }
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
      <ApplyCalendar />
    </S.Wrapper>
  );
}

export default Application;
