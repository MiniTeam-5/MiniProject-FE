import moment from 'moment';
import * as S from './styles';

function AlarmCard({ data }) {
  const { content, createdAt } = data;

  // 메시지 발신 시각으로부터 얼마나 지났는지
  const timeDiff = moment(createdAt).fromNow();
  const [name, startDate, endDate, days, type, status] = content.split(',');

  return (
    <S.CardLi>
      <S.StatusText>
        {type} 신청이 <S.Status className={status}>{status}</S.Status>되었습니다.
      </S.StatusText>
      <S.ApplyInfo>신청 날짜 : {type === '당직' ? startDate : `${startDate}~${endDate} (${days}일)`}</S.ApplyInfo>
      <S.TimeDiff>{timeDiff}</S.TimeDiff>
    </S.CardLi>
  );
}

export default AlarmCard;
