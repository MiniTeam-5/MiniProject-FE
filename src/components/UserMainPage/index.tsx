import ApplicationStatus from './ApplicationStatus';
import temp from '../../mockup/schedule_login.json';
import * as S from './styles';
import Header from '../common/Header';

function UserMainPage() {
  // function sortByStartDate(a: { start_date: string }, b: { start_date: string }): number {
  //   const dateA = a['start_date'] ? new Date(a['start_date']).getTime() : 0;
  //   const dateB = b['start_date'] ? new Date(b['start_date']).getTime() : 0;
  //   return dateA < dateB ? 1 : -1;
  // }

  const annualList = temp.data.filter((item) => item.type === 'annual');
  const dutyList = temp.data.filter((item) => item.type === 'duty');

  const today = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }).slice(0, 10);
  const filteredAnnualList = annualList.filter((item) => new Date(item.start_date) >= new Date(today));
  const filteredDutyList = dutyList.filter((item) => new Date(item.start_date) >= new Date(today));

  return (
    <>
      <Header />
      <S.UserMain>
        <ApplicationStatus title='연차 신청 현황' annualList={filteredAnnualList} />
        <ApplicationStatus title='당직 신청 현황' dutyList={filteredDutyList} />
      </S.UserMain>
    </>
  );
}

export default UserMainPage;
