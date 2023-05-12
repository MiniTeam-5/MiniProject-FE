import ApplicationStatus from './ApplicationStatus';
import * as S from './styles';
import Header from '../common/Header';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteApplication, getSchedule } from '../../apis/auth';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

function UserMainPage() {
  const queryClient = useQueryClient();

  // 가까운 날짜 순으로 정렬
  // TODO: 인터페이스 수정
  function sortByStartDate(a: { start_date: string }, b: { start_date: string }): number {
    const dateA = a['startDate'] ? new Date(a['startDate']).getTime() : 0;
    const dateB = b['startDate'] ? new Date(b['startDate']).getTime() : 0;
    return dateA > dateB ? 1 : -1;
  }

  // 특정 유저 연차/당직 정보
  const { data: userSchedule } = useQuery('schedule', getSchedule);

  const { mutate } = useMutation(deleteApplication, {
    onSuccess() {
      queryClient.invalidateQueries('schedule');
      window.location.reload();
    },
    onError(error: AxiosError) {
      Swal.fire({
        icon: 'error',
        text: error?.response?.data?.data?.value
      });
    }
  });

  const annualList = userSchedule?.data?.filter((item: any) => item.type === 'ANNUAL');
  const dutyList = userSchedule?.data?.filter((item: any) => item.type === 'DUTY');

  const today = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }).slice(0, 10);
  const filteredAnnualList = annualList
    ?.filter((item: any) => new Date(item.startDate) >= new Date(today))
    .sort(sortByStartDate);
  const filteredDutyList = dutyList
    ?.filter((item: any) => new Date(item.startDate) >= new Date(today))
    .sort(sortByStartDate);

  return (
    <>
      <Header />
      <S.UserMain>
        <ApplicationStatus title='연차 신청 현황' annualList={filteredAnnualList} mutate={mutate} />
        <ApplicationStatus title='당직 신청 현황' dutyList={filteredDutyList} mutate={mutate} />
      </S.UserMain>
    </>
  );
}

export default UserMainPage;
