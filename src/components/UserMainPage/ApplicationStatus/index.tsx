// @ts-nocheck
import * as S from './styles';
import { ApplicationStatusProps } from '../../../interfaces/application';
import Swal from 'sweetalert2';
import { CancelApplication } from '../../../interfaces/application';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import { deleteApplication } from '../../../apis/auth';
import { getUser } from '../../../apis/auth';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../store/reducers/userReducers';
import formatDateString from '../../../utils/dateUtils';

function ApplicationStatus({ applyType, annualList, dutyList }: ApplicationStatusProps) {
  const remainDays = useSelector((state) => state.loginedUser.remainDays);
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteApplication, {
    onSuccess: async () => {
      queryClient.invalidateQueries('schedule');
      queryClient.invalidateQueries('schedules');

      const response = (await getUser()).data;
      dispatch(userLogin(response));
    },
    onError(error: AxiosError) {
      Swal.fire({
        icon: 'error',
        text: error?.response?.data?.data?.value
      });
      queryClient.invalidateQueries('schedule');
    }
  });

  const cancelHandler = ({ id, type, startDate, endDate }: CancelApplication) => {
    const leaveType = type === 'ANNUAL' ? '연차' : '당직';

    Swal.fire({
      icon: 'warning',
      html: `[${leaveType}] <br /><br /> ${startDate} ${endDate ? '~' : ''} ${
        endDate ? endDate : ''
      }<br /><br />신청 취소 하시겠습니까?`,
      showCancelButton: true,
      confirmButtonText: '신청 취소',
      cancelButtonText: '닫기'
    }).then((res) => {
      if (res.isConfirmed) mutate(id);
    });
  };

  return (
    <S.ApplicationStatus>
      <S.Header>
        <S.Type>{applyType} 신청 현황</S.Type>
        {applyType === '연차' && <S.NumberOfAnnual>남은 연차 : {remainDays}개</S.NumberOfAnnual>}
      </S.Header>

      {/* 연차 신청 현황 */}
      {annualList && (
        <S.List hasScrollbar={annualList.length > 3}>
          {annualList?.map((annual, index) => {
            const { id, type, status, startDate, endDate } = annual;

            let statusKr = status;
            if (statusKr === 'APPROVAL') statusKr = '승인완료';
            else if (statusKr === 'WAITING') statusKr = '승인대기';
            else if (statusKr === 'REJECTION') statusKr = '승인거절';

            return (
              <S.StatusItem key={index}>
                <p>{formatDateString(new Date(startDate), new Date(endDate))}</p>

                <S.StatusTagGroup>
                  <S.StatusTag status={status}>{statusKr}</S.StatusTag>

                  {status === 'WAITING' && (
                    <S.StatusTag as='button' cancel onClick={() => cancelHandler({ id, type, startDate, endDate })}>
                      취소
                    </S.StatusTag>
                  )}
                </S.StatusTagGroup>
              </S.StatusItem>
            );
          })}
        </S.List>
      )}

      {/* 당직 신청 현황 */}
      {dutyList && (
        <S.List hasScrollbar={dutyList.length > 3}>
          {dutyList?.map((duty, index) => {
            const { id, type, startDate, status } = duty;

            let statusKr = status;
            if (statusKr === 'APPROVAL') statusKr = '승인완료';
            else if (statusKr === 'WAITING') statusKr = '승인대기';
            else if (statusKr === 'REJECTION') statusKr = '승인거절';

            return (
              <S.StatusItem key={index}>
                <p>{startDate}</p>

                <S.StatusTagGroup>
                  <S.StatusTag status={status}>{statusKr}</S.StatusTag>

                  {status === 'WAITING' && (
                    <S.StatusTag as='button' cancel onClick={() => cancelHandler({ id, type, startDate })}>
                      취소
                    </S.StatusTag>
                  )}
                </S.StatusTagGroup>
              </S.StatusItem>
            );
          })}
        </S.List>
      )}
    </S.ApplicationStatus>
  );
}

export default ApplicationStatus;
