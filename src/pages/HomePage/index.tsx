import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import UserMain from '../../components/UserMainPage';
import ScheduleCalendar from '../../components/common/ScheduleCalendar';
import Admin from './admin';
import temp from '../../mockup/user_login.json';
import { RootState } from '../../store';

function HomePage() {
  // 유저 가져오기
  const loginedUser = useSelector((state: RootState) => state.loginedUser);

  return (
    <div>
      <Header />
      {loginedUser.role === 'ROLE_USER' ? <UserMain /> : <Admin />}
      <ScheduleCalendar />
    </div>
  );
}

export default HomePage;
