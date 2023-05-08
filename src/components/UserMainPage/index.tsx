import ApplicationStatus from './ApplicationStatus';
import temp from '../../mockup/schedule_login.json';
import * as S from './styles';

function UserMainPage() {
  function sortByStartDate(a: { start_date: string }, b: { start_date: string }): number {
    const dateA = a['start_date'] ? new Date(a['start_date']).getTime() : 0;
    const dateB = b['start_date'] ? new Date(b['start_date']).getTime() : 0;
    return dateA < dateB ? 1 : -1;
  }

  const annualList = temp.data.filter((item) => item.type === 'annual').sort(sortByStartDate);
  const dutyList = temp.data.filter((item) => item.type === 'duty').sort(sortByStartDate);

  return (
    <S.UserMain>
      <ApplicationStatus title='연차 신청 현황' annualList={annualList} />
      <ApplicationStatus title='당직 신청 현황' dutyList={dutyList} />
    </S.UserMain>
  );
}

export default UserMainPage;
