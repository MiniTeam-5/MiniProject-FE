import { useEffect } from 'react';
import * as S from './styles';
import axios from 'axios';
import { Leave, LeaveResponse } from '../../../interfaces/applicationStatus';

function ApplicationStatus({ leaveList, setLeaveList }: { leaveList: Leave[]; setLeaveList: (list: Leave[]) => void }) {
  useEffect(() => {
    async function fetchLeaveList() {
      const response = await axios.get<LeaveResponse>('/admin/leave');
      setLeaveList(response.data.data);
    }
    fetchLeaveList();
  }, [setLeaveList]);

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
            {leaveList.map((leave) => (
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
                  <p>
                    {leave.startDate} ~ {leave.endDate}
                  </p>
                </td>
                <td>
                  <div className='btn_box flex'>
                    <button className='ok'>승인</button>
                    <button className='refusal'>거부</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </S.StatusTable>
      </S.StatusTableWrap>
    </S.ApplicationStatus>
  );
}

export default ApplicationStatus;
