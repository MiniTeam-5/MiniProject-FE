import moment from 'moment';
import * as S from './styles';
import { IAlarmCardProps } from '../../../../interfaces/alarm';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import formatDateString from '../../../../utils/dateUtils';

function AlarmCard({ data }: IAlarmCardProps) {
  const { role } = useSelector((state: RootState) => state.loginedUser);
  const { username, startDate, endDate, usingDays, type, status, createdAt } = data;

  const newStartDate = new Date(startDate);
  const newEndDate = new Date(endDate);
  const dateString = formatDateString(newStartDate, newEndDate);
  // 메시지 발신 시각으로부터 얼마나 지났는지
  const timeDiff = moment(createdAt).fromNow();
  const typeText = type === 'ANNUAL' ? '연차' : '당직';
  const statusText = status === 'APPROVAL' ? '승인' : '거절';

  if (role === 'ROLE_USER')
    return (
      <S.CardLi>
        <S.StatusText>
          {typeText} 신청이 <S.Status className={statusText}>{statusText}</S.Status>되었습니다.
        </S.StatusText>
        <S.ApplyInfo>
          신청 날짜 : {dateString} {typeText === '연차' && `(${usingDays}일)`}
        </S.ApplyInfo>
        <S.TimeDiff>{timeDiff}</S.TimeDiff>
      </S.CardLi>
    );
  return (
    <S.CardLi>
      <S.StatusText>
        {username}님이 {typeText}
        {typeText === '연차' ? '를' : '을'} 신청하셨습니다.
      </S.StatusText>
      <S.ApplyInfo>
        신청 날짜 : {dateString} {typeText === '연차' && `(${usingDays}일)`}
      </S.ApplyInfo>
      <S.TimeDiff>{timeDiff}</S.TimeDiff>
    </S.CardLi>
  );
}

export default AlarmCard;
