import * as S from './styles';

function CalendarGuide() {
  return (
    <S.Guide>
      <S.GuideCenter>
        <S.AnuualColorBox />
        <span>연차</span>
      </S.GuideCenter>

      <S.GuideCenter>
        <S.DutyColorBox />
        <span>당직</span>
      </S.GuideCenter>
    </S.Guide>
  );
}

export default CalendarGuide;
