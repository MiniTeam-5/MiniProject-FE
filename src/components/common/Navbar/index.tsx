import { Link, NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { RiAddBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import * as S from './styles';
function Navbar() {
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
    </S.Navbar>
  );
}

export default Navbar;
