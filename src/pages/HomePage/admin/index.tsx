import { useState } from 'react';
import ApplicationSatus from '../../../components/AdminHomePage/ApplicationStatus';
import ApplicationRight from '../../../components/AdminHomePage/ApplicationRight';
import { Leave } from '../../../interfaces/applicationStatus';
import * as S from './styles';

function Admin() {
  const [leaveList, setLeaveList] = useState<Leave[]>([]);

  return (
    <S.AdminHome>
      <div className='flex'>
        <ApplicationSatus leaveList={leaveList} setLeaveList={setLeaveList} />
        <ApplicationRight leaveList={leaveList} />
      </div>
    </S.AdminHome>
  );
}

export default Admin;
