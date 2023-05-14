import { Link, NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { RiAddBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import Alarm from '../Alarm';
import { axiosInstance } from '../../../apis/instance';
import { setAlarmList, useAlarm } from '../../../store/reducers/alarmSlice';
import { IAlarm } from '../../../interfaces/alarm';
import { getCookie } from '../../../utils/cookies';
import { useGetNewAlarms } from '../../../hooks/useGetNewAlarms';

function Navbar() {
  const [alarm, setAlarm] = useState(false);
  const [isAlarmOpened, setIsAlarmOpened] = useState(false);
  const { alarmList } = useGetNewAlarms();
  const { dispatch } = useAlarm();

  const connectURL = import.meta.env.VITE_API_URL + 'auth/connect';
  const disconnectURL = import.meta.env.VITE_API_URL + 'auth/disconnect';
  const handleAlarmOpen = () => {
    setIsAlarmOpened(!isAlarmOpened);
    if (!isAlarmOpened) {
      setAlarm(false);
    }
  };

  const handleCloseAlarm = (data: { id: number; alarmList: IAlarm[] }) => {
    setIsAlarmOpened(false);
    dispatch(setAlarmList(data));
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
    // source.addEventListener('open', () => {
    //   console.log('open');
    // });
    source.addEventListener('alarm', () => {
      console.log('alarm');
      setAlarm(true);
    });

    return () => {
      source.close();
      axiosInstance().post(disconnectURL);
    };
  }, []);

  return (
    <S.Navbar>
      <div>
        <S.User>
          <div className='user_img'>
            <img src='/assets/profile.png' alt='프로필' />
          </div>
          <p>김아무개</p>
          {/* user_tag와 같이 class 추가
           관리자 - tag_admin, 마스터 - tag_master */}
          <div className='user_tag'>
            <span>사원</span>
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
            <div>
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
      {isAlarmOpened && <Alarm handleCloseAlarm={handleCloseAlarm} />}
    </S.Navbar>
  );
}

export default Navbar;
