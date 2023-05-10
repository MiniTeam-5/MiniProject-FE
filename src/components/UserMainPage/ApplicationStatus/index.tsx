import * as S from './styles';
import { ApplicationStatusProps } from '../../../interfaces/application';
import { useMutation } from 'react-query';
import { deleteApplication } from '../../../apis/auth';

function ApplicationStatus({ title, annualList, dutyList }: ApplicationStatusProps) {
  const { mutate } = useMutation(deleteApplication, {
    onSuccess(data) {
      console.log(data);
    }
  });

  const cancelHandler = (id) => {
    mutate(id);
  };

  return (
    <S.ApplicationStatus>
      <S.Header>
        <S.Type>{title}</S.Type>

        {annualList && <S.NumberOfAnnual>남은 연차 : 4개</S.NumberOfAnnual>}
      </S.Header>

      {/* 연차 신청 현황 */}
      {annualList && (
        <S.List>
          {annualList?.map((annual, index) => {
            const { id, status, startDate, endDate } = annual;

            let statusKr = status;
            if (statusKr === 'APPROVED') statusKr = '승인완료';
            else if (statusKr === 'WAITING') statusKr = '승인대기';
            else if (statusKr === 'REJECTED') statusKr = '승인거절';

            return (
              <S.StatusItem key={index}>
                <p>
                  {startDate} ~ {endDate}
                </p>

                <S.StatusTagGroup>
                  <S.StatusTag status={status}>{statusKr}</S.StatusTag>

                  {status === 'WAITING' && (
                    <S.StatusTag as='button' cancel onClick={() => cancelHandler(id)}>
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
        <S.List>
          {dutyList?.map((duty, index) => {
            const { id, startDate, status } = duty;

            let statusKr = status;
            if (statusKr === 'APPROVED') statusKr = '승인완료';
            else if (statusKr === 'WAITING') statusKr = '승인대기';
            else if (statusKr === 'REJECTED') statusKr = '승인거절';

            return (
              <S.StatusItem key={index}>
                <p>{startDate}</p>

                <S.StatusTagGroup>
                  <S.StatusTag status={status}>{statusKr}</S.StatusTag>

                  {status === 'WAITING' && (
                    <S.StatusTag as='button' cancel onClick={() => cancelHandler(id)}>
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
