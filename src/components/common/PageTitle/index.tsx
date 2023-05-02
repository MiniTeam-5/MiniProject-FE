import { pageTitleProps } from '../../../interfaces/common';
import * as S from './styles';

function PageTitle({ title }: pageTitleProps) {
  return (
    <S.Wrapper>
      <S.LogoIcon src='/assets/logo-icon.png' alt='lupin' />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}

export default PageTitle;
