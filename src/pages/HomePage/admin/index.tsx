import ApplicationSatus from '../../../components/AdminHomePage/ApplicationStatus';
import ApplicationRight from '../../../components/AdminHomePage/ApplicationRight';
import * as S from './styles';

function Admin() {
  return (
    <S.AdminHome>
      <div className='flex'>
        <ApplicationSatus />
        <ApplicationRight />
      </div>
    </S.AdminHome>
  );
}

export default Admin;
