import * as S from './styles';

function Loading() {
  return (
    <S.LoadingWrapper>
      <S.Bg />
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.LoadingWrapper>
  );
}

export default Loading;
