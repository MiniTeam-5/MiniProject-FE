import UserMain from '../../components/UserMain';
import ScheduleCalendar from '../../components/common/ScheduleCalendar';
import temp from '../../mockup/user_login.json';

function HomePage() {
  const user = temp.data[0].role;

  return (
    <div>
      {user === 'USER' ? <UserMain /> : <>관리자 메인</>}
      <ScheduleCalendar />
    </div>
  );
}

export default HomePage;
