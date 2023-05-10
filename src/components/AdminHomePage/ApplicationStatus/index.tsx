import * as S from './styles';

function ApplicationSatus() {
  return (
    <S.ApplicationStatus>
      <S.Title>
        <h3>연차 / 당직 신청 현황</h3>
      </S.Title>
      <S.StatusTableWrap>
        <S.StatusTable>
          <thead>
            <tr>
              <th>사원명</th>
              <th>유형</th>
              <th>신청날짜</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='flex'>
                  <div className='staff_img'>
                    <img src='/assets/profile.png' alt='프로필' />
                  </div>
                  <p>박사원</p>
                </div>
              </td>
              <td>
                <p>연차</p>
              </td>
              <td>
                <p>2023년 4월 10일 ~ 11일</p>
              </td>
              <td>
                <div className='btn_box flex'>
                  <button className='ok'>승인</button>
                  <button className='refusal'>거부</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex'>
                  <div className='staff_img'>
                    <img src='/assets/profile.png' alt='프로필' />
                  </div>
                  <p>박사원</p>
                </div>
              </td>
              <td>
                <p>연차</p>
              </td>
              <td>
                <p>2023년 4월 10일 ~ 11일</p>
              </td>
              <td>
                <div className='btn_box flex'>
                  <button className='ok'>승인</button>
                  <button className='refusal'>거부</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex'>
                  <div className='staff_img'>
                    <img src='/assets/profile.png' alt='프로필' />
                  </div>
                  <p>이사원</p>
                </div>
              </td>
              <td>
                <p>당직</p>
              </td>
              <td>
                <p>2023년 4월 11일</p>
              </td>
              <td>
                <div className='btn_box flex'>
                  <button className='ok'>승인</button>
                  <button className='refusal'>거부</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex'>
                  <div className='staff_img'>
                    <img src='/assets/profile.png' alt='프로필' />
                  </div>
                  <p>박사원</p>
                </div>
              </td>
              <td>
                <p>연차</p>
              </td>
              <td>
                <p>2023년 4월 10일 ~ 11일</p>
              </td>
              <td>
                <div className='btn_box flex'>
                  <button className='ok'>승인</button>
                  <button className='refusal'>거부</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex'>
                  <div className='staff_img'>
                    <img src='/assets/profile.png' alt='프로필' />
                  </div>
                  <p>박사원</p>
                </div>
              </td>
              <td>
                <p>연차</p>
              </td>
              <td>
                <p>2023년 4월 10일 ~ 11일</p>
              </td>
              <td>
                <div className='btn_box flex'>
                  <button className='ok'>승인</button>
                  <button className='refusal'>거부</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex'>
                  <div className='staff_img'>
                    <img src='/assets/profile.png' alt='프로필' />
                  </div>
                  <p>박사원</p>
                </div>
              </td>
              <td>
                <p>연차</p>
              </td>
              <td>
                <p>2023년 4월 10일 ~ 11일</p>
              </td>
              <td>
                <div className='btn_box flex'>
                  <button className='ok'>승인</button>
                  <button className='refusal'>거부</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='flex'>
                  <div className='staff_img'>
                    <img src='/assets/profile.png' alt='프로필' />
                  </div>
                  <p>박사원</p>
                </div>
              </td>
              <td>
                <p>연차</p>
              </td>
              <td>
                <p>2023년 4월 10일 ~ 11일</p>
              </td>
              <td>
                <div className='btn_box flex'>
                  <button className='ok'>승인</button>
                  <button className='refusal'>거부</button>
                </div>
              </td>
            </tr>
          </tbody>
        </S.StatusTable>
      </S.StatusTableWrap>
    </S.ApplicationStatus>
  );
}

export default ApplicationSatus;
