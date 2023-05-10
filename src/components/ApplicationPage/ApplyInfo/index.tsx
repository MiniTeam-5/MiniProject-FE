import { IApplyInfoProps } from '../../../interfaces/applicationPage';
import * as S from './styles';

function ApplyInfo({ select, date }: IApplyInfoProps) {
  const selectText = select === 'ANNUAL' ? '연차' : '당직';
  const selectDays = (() => {
    if (!date.startDate || !date.endDate) return 0;
    const startDate = new Date(date.startDate);
    const endDate = new Date(date.endDate);
    const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / oneDay);
    return diffDays + 1; // include start date
  })();
  return (
    <S.ApplyInfo>
      <S.ApplyInfoTitle>{selectText} 신청 정보</S.ApplyInfoTitle>
      <S.ApplyInfoContent>
        신청 날짜 : {date.startDate} {select === 'ANNUAL' ? '~ ' + date.endDate : ''}
      </S.ApplyInfoContent>
      <S.ApplyInfoContent>신청 일수 : {selectDays}일</S.ApplyInfoContent>
      <S.ApplyBtn>신청하기</S.ApplyBtn>
    </S.ApplyInfo>
  );
}

export default ApplyInfo;
