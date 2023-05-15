import { applySchedule } from '../../../apis/auth';
import { IApplyInfoProps } from '../../../interfaces/applicationPage';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import Loading from '../../common/Loading';
import { useDispatch } from 'react-redux';
import { setRemainDays } from '../../../store/reducers/userReducers';
function ApplyInfo({ select, date }: IApplyInfoProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectDays = (() => {
    if (!date.startDate || !date.endDate) return 0;
    const startDate = new Date(date.startDate);
    const endDate = new Date(date.endDate);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / oneDay);
    return diffDays + 1;
  })();

  const { mutate, isLoading } = useMutation(applySchedule, {
    onSuccess: (data) => {
      if (data.status === 200) {
        MySwal.fire({
          icon: 'success',
          title: '신청이 완료되었습니다.'
        }).then(() => {
          dispatch(setRemainDays(selectDays));
          navigate('/');
        });
      }
    },
    onError: (error: any) => {
      MySwal.fire({
        icon: 'error',
        title: '신청에 실패하였습니다.',
        text: error
      });
    }
  });
  const selectText = select === 'ANNUAL' ? '연차' : '당직';
  const MySwal = withReactContent(Swal);

  const handleSubmit = async () => {
    const submitData = { type: select, startDate: date.startDate, endDate: date.endDate };
    mutate(submitData);
  };
  if (isLoading) return <Loading />;
  return (
    <S.ApplyInfo>
      <S.ApplyInfoTitle>{selectText} 신청 정보</S.ApplyInfoTitle>
      <S.ApplyInfoContent>
        신청 날짜 : {date.startDate} {select === 'ANNUAL' ? '~ ' + date.endDate : ''}
      </S.ApplyInfoContent>
      <S.ApplyInfoContent>신청 일수 : {selectDays}일</S.ApplyInfoContent>
      <S.ApplyBtn onClick={handleSubmit}>신청하기</S.ApplyBtn>
    </S.ApplyInfo>
  );
}

export default ApplyInfo;
