import Header from '../../components/common/Header';
import UserMain from '../../components/UserMainPage';
import ScheduleCalendar from '../../components/common/ScheduleCalendar';
import Admin from './admin';
import temp from '../../mockup/user_login.json';

function HomePage() {
  const user = temp.data[1].role;

  return (
    <div>
      <Header />
      {user === 'USER' ? <UserMain /> : <Admin />}
      <ScheduleCalendar />
    </div>
  );
}

export default HomePage;
