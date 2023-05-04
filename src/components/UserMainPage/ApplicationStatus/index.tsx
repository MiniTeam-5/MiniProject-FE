import * as S from './styles';
import { ApplicationStatusProps } from '../../../interfaces/application';

function index({ title, annualList, dutyList }: ApplicationStatusProps) {
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
            const { status, start_date, end_date } = annual;

            let statusKr = status;
            if (statusKr === 'approve') statusKr = '승인완료';
            else if (statusKr === 'wait') statusKr = '승인대기';
            else if (statusKr === 'reject') statusKr = '승인거절';

            return (
              <S.StatusItem key={index}>
                <p>
                  {start_date} ~ {end_date}
                </p>

                <S.StatusTagGroup>
                  <S.StatusTag status={status}>{statusKr}</S.StatusTag>

                  {status === 'wait' && (
                    <S.StatusTag as='button' cancel>
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
            const { start_date, status } = duty;

            let statusKr = status;
            if (statusKr === 'approve') statusKr = '승인완료';
            else if (statusKr === 'wait') statusKr = '승인대기';
            else if (statusKr === 'reject') statusKr = '승인거절';

            return (
              <S.StatusItem key={index}>
                <p>{start_date}</p>

                <S.StatusTagGroup>
                  <S.StatusTag status={status}>{statusKr}</S.StatusTag>

                  {status === 'wait' && (
                    <S.StatusTag as='button' cancel>
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

export default index;
