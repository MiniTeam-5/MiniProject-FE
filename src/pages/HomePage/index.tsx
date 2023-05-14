import UserMain from '../../components/UserMainPage';
import Header from '../../components/common/Header';
import ScheduleCalendar from '../../components/common/ScheduleCalendar';
import temp from '../../mockup/user_login.json';

function HomePage() {
  const user = temp.data[0].role;

  return (
    <div>
      <Header />
      {user === 'USER' ? <UserMain /> : <>관리자 메인</>}
      <ScheduleCalendar />
    </div>
  );
}

export default HomePage;
