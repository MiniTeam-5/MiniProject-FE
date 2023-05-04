import { Link } from 'react-router-dom';
import * as S from './index.styles';

function NotFoundPage() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundDiv>
        <S.NotFoundImg src='../../../public/assets/404error.jpg' alt='404error' />
        <S.NotFoundFirP>죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셨습니다.</S.NotFoundFirP>
        <S.NotFoundSecP>
          존재하지 않는 주소를 입력하셨거나, 요청하신 페이지는 주소가 변경, 삭제되어 찾을 수 없습니다.
        </S.NotFoundSecP>
        <Link to={'/'}>
          <S.NotFoundBtn>HOME</S.NotFoundBtn>
        </Link>
      </S.NotFoundDiv>
    </S.NotFoundContainer>
  );
}

export default NotFoundPage;
