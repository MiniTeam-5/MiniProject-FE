import moment from 'moment';
import 'moment/locale/ko';
import * as S from './styles';

function AlarmCard({ data }) {
  const { content, createdAt } = data;

  // 메시지 발신 시각으로부터 얼마나 지났는지
  const timeDiff = moment(createdAt).fromNow();
  const [name, startDate, endDate, days, type, status] = content.split(',');
  const statusText = status === 'APPROVAL' ? '승인' : '거절';
  return (
    <S.CardLi>
      <S.StatusText>
        {type === 'ANNUAL' ? '연차' : '당직'} 신청이 <S.Status className={statusText}>{statusText}</S.Status>되었습니다.
      </S.StatusText>
      <S.ApplyInfo>신청 날짜 : {type === 'DUTY' ? startDate : `${startDate}~${endDate} (${days}일)`}</S.ApplyInfo>
      <S.TimeDiff>{timeDiff}</S.TimeDiff>
    </S.CardLi>
  );
}

export default AlarmCard;
