import * as S from './styles';
function ApplyInfo({ select, date }) {
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
  return (
    <S.ApplyInfo>
      <S.ApplyInfoTitle>{selectText} 신청 정보</S.ApplyInfoTitle>
      <S.ApplyInfoContent>
        신청 날짜 : {date.start_date} {select === 'annual' ? '~ ' + date.end_date : ''}
      </S.ApplyInfoContent>
      <S.ApplyInfoContent>신청 일수 : {selectDays}일</S.ApplyInfoContent>
    </S.ApplyInfo>
  );
}

export default ApplyInfo;
