import { useSelector } from 'react-redux';
import UserMain from '../../components/UserMainPage';
import Header from '../../components/common/Header';
import ScheduleCalendar from '../../components/common/ScheduleCalendar';

function HomePage() {
  const user = useSelector((state: any) => state.loginedUser.role);

  return (
    <div>
      <Header />
      {user === 'ROLE_USER' ? <UserMain /> : <>관리자 메인</>}
      <ScheduleCalendar />
    </div>
  );
}

export default HomePage;
