import ApplicationStatus from './ApplicationStatus';
import * as S from './styles';
import { useQuery } from 'react-query';
import { getSchedule } from '../../apis/auth';
import { UserApplication } from '../../interfaces/application';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function UserMainPage() {
  const userId = useSelector((state: RootState) => state.loginedUser.id);

  // 가까운 날짜 순으로 정렬
  function sortByStartDate(a: { startDate: string }, b: { startDate: string }): number {
    const dateA = a['startDate'] ? new Date(a['startDate']).getTime() : 0;
    const dateB = b['startDate'] ? new Date(b['startDate']).getTime() : 0;
    return dateA > dateB ? 1 : -1;
  }

  // 특정 유저 연차/당직 정보
  const { data: userSchedule } = useQuery(['schedule', userId], () => getSchedule(Number(userId)), {
    initialData: []
  });

  const annualList = userSchedule?.data?.filter((item: UserApplication) => item.type === 'ANNUAL');
  const dutyList = userSchedule?.data?.filter((item: UserApplication) => item.type === 'DUTY');

  const today = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }).slice(0, 10);
  const filteredAnnualList = annualList
    ?.filter((item: UserApplication) => new Date(item.startDate) >= new Date(today))
    .sort(sortByStartDate);
  const filteredDutyList = dutyList
    ?.filter((item: UserApplication) => new Date(item.startDate) >= new Date(today))
    .sort(sortByStartDate);

  return (
    <>
      <S.UserMain>
        <ApplicationStatus applyType='연차' annualList={filteredAnnualList} />
        <ApplicationStatus applyType='당직' dutyList={filteredDutyList} />
      </S.UserMain>
    </>
  );
}

export default UserMainPage;
