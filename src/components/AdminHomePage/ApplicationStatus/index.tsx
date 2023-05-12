import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as S from './styles';
import { fetchLeaveList, approveLeave } from '../../../apis/admin';
import { ApprovalResponse, LeaveResponse } from '../../../interfaces/applicationStatus';

function ApplicationStatus() {
  const { data, isLoading, isError } = useQuery<LeaveResponse>('leaveList', fetchLeaveList);
  const queryClient = useQueryClient();

  const approveLeaveMutation = useMutation(
    (data: { id: number; status: string }) => approveLeave(data.id, data.status),
    {
      onSuccess: (data: ApprovalResponse, variables: { id: number; status: string }) => {
        // 성공적으로 API 호출이 끝났을 때 실행되는 콜백 함수
        console.log(`Successfully approved leave request ${variables.id} with status ${variables.status}`);
        queryClient.invalidateQueries('leaveList');
      },
      onError: (error: Error) => {
        // API 호출 중 에러가 발생했을 때 실행되는 콜백 함수
        console.log(`Error occurred while approving leave request: ${error}`);
        queryClient.invalidateQueries('leaveList');
      }
    }
  );

  const handleApproveLeave = (id: number, status: string) => {
    approveLeaveMutation.mutate({ id, status });
  };

  if (!data) {
    return (
      <S.ApplicationStatus>
        <S.Title>
          <h3>연차 / 당직 신청 현황</h3>
        </S.Title>
        <p>현재 신청 현황이 없습니다.</p>
      </S.ApplicationStatus>
    );
  }

  const sortedData = {
    data: data.data.sort(
      (a: { startDate: string }, b: { startDate: string }) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    )
  };

  return (
    <S.ApplicationStatus>
      <S.Title>
        <h3>연차 / 당직 신청 현황</h3>
      </S.Title>
      <S.StatusTableWrap>
        <S.StatusTable>
          <thead>
            <tr>
              <th>사원명</th>
              <th>유형</th>
              <th>신청날짜</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.data.map((leave) => {
              const startDate = new Date(leave.startDate);
              const endDate = new Date(leave.endDate);
              const startYear = startDate.getFullYear();
              const startMonth = startDate.getMonth() + 1;
              const startDay = startDate.getDate();
              const endYear = endDate.getFullYear();
              const endMonth = endDate.getMonth() + 1;
              const endDay = endDate.getDate();

              let dateString = '';
              if (startYear === endYear && startMonth === endMonth && startDay === endDay) {
                dateString = `${startYear}년 ${startMonth}월 ${startDay}일`; // 시작일과 종료일이 같은 경우
              } else if (startYear === endYear && startMonth === endMonth) {
                dateString = `${startYear}년 ${startMonth}월 ${startDay}일 ~ ${endDay}일`; // 년도와 월이 같고 일만 다른 경우
              } else if (startYear === endYear) {
                dateString = `${startYear}년 ${startMonth}월 ${startDay}일 ~ ${endMonth}월 ${endDay}일`; // 년도는 같고 월만 다른 경우
              } else {
                dateString = `${startYear}년 ${startMonth}월 ${startDay}일 ~ ${endYear}년 ${endMonth}월 ${endDay}일`; // 년도가 다른 경우
              }
              return (
                <tr key={leave.id}>
                  <td>
                    <div className='flex'>
                      <div className='staff_img'>
                        <img src={leave.profile ? leave.profile : '/assets/profile.png'} alt='프로필' />
                      </div>
                      <p>{leave.username}</p>
                    </div>
                  </td>
                  <td>
                    <p>{leave.type == 'ANNUAL' ? '연차' : '당직'}</p>
                  </td>
                  <td>
                    <p>{dateString}</p>
                  </td>
                  <td>
                    <div className='btn_box flex'>
                      <button className='ok' onClick={() => handleApproveLeave(leave.id, 'APPROVAL')}>
                        승인
                      </button>
                      <button className='refusal' onClick={() => handleApproveLeave(leave.id, 'REJECTION')}>
                        거부
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.StatusTable>
      </S.StatusTableWrap>
    </S.ApplicationStatus>
  );
}

export default ApplicationStatus;
