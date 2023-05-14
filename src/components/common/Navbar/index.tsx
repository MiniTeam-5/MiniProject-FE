import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { RiAddBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import * as S from './styles';
import { EventSourcePolyfill } from 'event-source-polyfill';
import Alarm from '../Alarm';
import { axiosInstance } from '../../../apis/instance';
import { setAlarmList, useAlarm } from '../../../store/reducers/alarmSlice';
import { getCookie } from '../../../utils/cookies';
import { useGetNewAlarms } from '../../../hooks/useGetNewAlarms';
import { USER_TYPES, USER_CLASSNAMES } from '../../../constants/navbarConstants';
import { RootState } from '../../../store';
import { logout } from '../../../apis/auth';

function Navbar() {
  // 유저 가져오기
  const loginedUser = useSelector((state: RootState) => state.loginedUser);

  // 알람

  const { alarmList, isLoading, newData } = useGetNewAlarms();
  const [alarm, setAlarm] = useState(false);
  const [isAlarmOpened, setIsAlarmOpened] = useState(false);
  const [newSource, setNewSource] = useState<EventSourcePolyfill | null>(null);
  const { dispatch } = useAlarm();

  const connectURL = import.meta.env.VITE_API_URL + 'auth/connect';
  const disconnectURL = import.meta.env.VITE_API_URL + 'auth/disconnect';
  const handleAlarmOpen = () => {
    setIsAlarmOpened(!isAlarmOpened);
    if (!isAlarmOpened) {
      setAlarm(false);
    } else {
      dispatch(setAlarmList({ id: Number(loginedUser.id), alarmList: newData }));
    }
  };

  const handleCloseAlarm = () => {
    setIsAlarmOpened(false);
    dispatch(setAlarmList({ id: Number(loginedUser.id), alarmList: newData }));
  };

  useEffect(() => {
    if (alarmList.length > 0) {
      setAlarm(true);
    }
    const token = getCookie('accessToken');
    const source = new EventSourcePolyfill(connectURL, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` }
    });
    setNewSource(source);
    source.addEventListener('alarm', () => {
      console.log('alarm');
      setAlarm(true);
    });

    return () => {
      source.close();
      axiosInstance().post(disconnectURL);
    };
  }, []);

  // 로그아웃
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      newSource?.close();
      axiosInstance().post(disconnectURL);
      await logout();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Navbar>
      <div>
        <S.User>
          <div className='user_img'>
            <img src={loginedUser.profile ? loginedUser.profile : '/assets/profile.png'} alt='프로필' />
          </div>
          <p>{loginedUser.username}</p>
          {/* user_tag와 같이 class 추가
           관리자 - tag_admin, 마스터 - tag_master */}
          <div className={`user_tag ${USER_CLASSNAMES[loginedUser.role]}`}>
            <span>{USER_TYPES[loginedUser.role]}</span>
          </div>
          <S.AlarmBtn className={alarm ? 'active' : ''} onClick={handleAlarmOpen}>
            <FaBell />
          </S.AlarmBtn>
        </S.User>
        <S.NavList>
          <li>
            <NavLink to='/'>
              <i>
                <AiFillHome />
              </i>
              <p>홈</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/editProfile'>
              <i>
                <CgProfile />
              </i>
              <p>프로필 수정</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/viewSchedule'>
              <i>
                <AiTwotoneCalendar />
              </i>
              <p>내 일정 보기</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/application'>
              <i>
                <RiAddBoxLine />
              </i>
              <p>연차 / 당직 신청</p>
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin'>
              <i>
                <BsPeople />
              </i>
              <p>사원 연차 관리</p>
            </NavLink>
          </li>
          <li>
            <div onClick={handleLogout}>
              <i>
                <RiLogoutBoxRLine />
              </i>
              <p>로그아웃</p>
            </div>
          </li>
        </S.NavList>
      </div>
      <S.NavLogo>
        <Link to='/'>
          <img src='/assets/logo-white.png' alt='lupintech' />
        </Link>
      </S.NavLogo>
      {isAlarmOpened && !isLoading && <Alarm data={alarmList} handleCloseAlarm={handleCloseAlarm} />}
    </S.Navbar>
  );
}

export default Navbar;
