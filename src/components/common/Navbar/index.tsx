import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { RiAddBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
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
          <li className='active'>
            <Link to='/'>
              <i>
                <AiFillHome />
              </i>
              <p>홈</p>
            </Link>
          </li>
          <li>
            <Link to='#'>
              <i>
                <CgProfile />
              </i>
              <p>프로필 수정</p>
            </Link>
          </li>
          <li>
            <Link to='#'>
              <i>
                <AiTwotoneCalendar />
              </i>
              <p>내 일정 보기</p>
            </Link>
          </li>
          <li>
            <Link to='#'>
              <i>
                <RiAddBoxLine />
              </i>
              <p>연차 / 당직 신청</p>
            </Link>
          </li>
          <li>
            <Link to='#'>
              <i>
                <RiLogoutBoxRLine />
              </i>
              <p>로그아웃</p>
            </Link>
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
