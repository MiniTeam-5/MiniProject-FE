import { Leave } from '../../../interfaces/applicationStatus';
import * as S from './styles';

function ApplicationRight({ leaveList }: { leaveList: Leave[] }) {
  const today: Date = new Date();
  const month: string = (today.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const day: string = today.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const dayOfWeek: string = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
    today.getDay()
  ];

  return (
    <S.ApplicationRight>
      <S.Waiting>
        <p>승인 대기 신청 개수</p>
        <strong>{leaveList.length}개</strong>
      </S.Waiting>
      <S.Today>
        <p>
          {month}.{day}
        </p>
        <span>{dayOfWeek}</span>
      </S.Today>
    </S.ApplicationRight>
  );
}

export default ApplicationRight;
