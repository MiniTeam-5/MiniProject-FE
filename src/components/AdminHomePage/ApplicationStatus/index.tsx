// @ts-nocheck
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Swal from 'sweetalert2';
import { fetchLeaveList, approveLeave } from '../../../apis/admin';
import { ApprovalResponse, LeaveResponse } from '../../../interfaces/applicationStatus';
import formatDateString from '../../../utils/dateUtils';
import * as S from './styles';
import { AxiosError } from 'axios';

function ApplicationStatus() {
  const { data } = useQuery<LeaveResponse>('leaveList', fetchLeaveList);
  const queryClient = useQueryClient();

  const approveLeaveMutation = useMutation(
    (data: { id: number; status: string }) => approveLeave(data.id, data.status),
    {
      onSuccess: (data: ApprovalResponse, variables: { id: number; status: string }) => {
        // 성공적으로 API 호출이 끝났을 때 실행되는 콜백 함수
        console.log(`Successfully approved leave request ${variables.id} with status ${variables.status}`);
        queryClient.invalidateQueries('leaveList');
      },
      onError: (error: AxiosError) => {
        // API 호출 중 에러가 발생했을 때 실행되는 콜백 함수
        console.log('aa', error);
        if (error.response && error.response.data) {
          Swal.fire({
            title: error.response.data.data.value,
            icon: 'error'
          });
        }
        queryClient.invalidateQueries('leaveList');
      }
    }
  );

  const handleApproveLeave = (id: number, status: string, username: string, type: string, dateString: string) => {
    Swal.fire({
      title: `${status === 'APPROVAL' ? '승인' : '거부'}하시겠습니까?`,
      html: `${username}님의 ${dateString} ${type == 'ANNUAL' ? '연차' : '당직'}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#76c891',
      cancelButtonColor: '#f26262',
      confirmButtonText: '네',
      cancelButtonText: '아니오'
    }).then((result) => {
      if (result.isConfirmed) {
        approveLeaveMutation.mutate({ id, status });
        Swal.fire('승인 완료', '해당 신청이 승인되었습니다.', 'success');
      } else {
        Swal.fire('승인 취소', '해당 신청이 승인되지 않았습니다.', 'info');
      }
    });
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
              const dateString = formatDateString(startDate, endDate);

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
                    <p>{formatDateString(new Date(leave.startDate), new Date(leave.endDate))}</p>
                  </td>
                  <td>
                    <div className='btn_box flex'>
                      <button
                        className='ok'
                        onClick={() => handleApproveLeave(leave.id, 'APPROVAL', leave.username, leave.type, dateString)}
                      >
                        승인
                      </button>
                      <button
                        className='refusal'
                        onClick={() =>
                          handleApproveLeave(leave.id, 'REJECTION', leave.username, leave.type, dateString)
                        }
                      >
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
