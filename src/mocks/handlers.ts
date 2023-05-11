import { rest } from 'msw';
import { db } from './api/data/db';
export const handlers = [
  // 로그인
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'success',
        data: {
          id: 1,
          role: 'USER'
        }
      })
    );
  }),
  // 회원가입
  rest.post('/join', async (req, res, ctx) => {
    try {
      const { email, password, username, fullName, hire_date } = await req.json();
      // check if the username is already taken
      const existingUser = db.users.find((user) => user.username === username);
      if (existingUser) {
        return res(
          ctx.status(400),
          ctx.json({
            status: 400,
            msg: 'badRequest',
            data: {
              key: 'username',
              value: 'The username is already taken'
            }
          })
        );
      }

      // validate the request body
      if (!email || !password || !username || !fullName || !hire_date) {
        return res(
          ctx.status(400),
          ctx.json({
            status: 400,
            msg: 'badRequest',
            data: {
              key: 'body',
              value: 'Request body is incomplete'
            }
          })
        );
      }
      // simulate a successful registration
      const user = {
        id: db.users.length + 1,
        username: username
      };
      // add the new user to the database
      db.users.push({
        id: user.id,
        username,
        email,
        password,
        role: 'USER',
        profile: '',
        annual_limit: 15,
        annual_count: 0,
        hire_date,
        status: true
      });
      return res(
        ctx.status(200),
        ctx.json({
          status: 200,
          msg: 'success',
          data: user
        })
      );
    } catch (error) {
      console.error(error);
      return res(ctx.status(500));
    }
  }),
  // 개인정보 가져오기
  rest.get('/auth/user', (req, res, ctx) => {
    // Authorization header에서 token을 추출합니다.
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');

    // 만약 토큰이 없으면 401 Unauthorized 에러를 반환합니다.
    if (!token) {
      return res(
        ctx.status(401),
        ctx.json({
          status: 401,
          msg: 'Unauthorized',
          data: null
        })
      );
    }

    // id 파라미터에서 사용자 id를 추출합니다.
    const { id } = req.params;

    // 사용자 정보를 가져옵니다.
    const user = db.users.find((user) => user.id === Number(id));

    // 사용자가 존재하지 않으면 404 Not Found 에러를 반환합니다.
    if (!user) {
      return res(
        ctx.status(404),
        ctx.json({
          status: 404,
          msg: 'Not Found',
          data: null
        })
      );
    }

    // 사용자 정보와 함께 200 OK 응답을 반환합니다.
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        msg: 'success',
        data: user
      })
    );
  }),
  // 개인정보 수정
  rest.post('/auth/user/update', (req, res, ctx) => {
    // id를 path parameter로부터 추출
    const { id } = req.params;

    // 요청 바디에서 사용자 정보 추출
    const { email, password, username, profile } = req.json();

    // 데이터베이스에서 사용자 정보를 찾아옴
    const user = db.users.find((user) => user.id === Number(id));

    // 사용자 정보가 없을 경우 404 Not Found 에러 반환
    if (!user) {
      return res(
        ctx.status(404),
        ctx.json({
          status: 404,
          msg: 'notFound',
          data: null
        })
      );
    }

    // 요청 바디의 정보로 사용자 정보를 수정함
    user.email = email;
    user.password = password;
    user.username = username;
    user.profile = profile;

    // 수정된 사용자 정보 반환
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        msg: 'success',
        data: user
      })
    );
  }),
  // 연차/당직 신청
  rest.post('/auth/leave/apply', async (req, res, ctx) => {
    try {
      const { type, start_date, end_date } = await req.json();

      // TODO: 실제 연차/당직 신청 로직 처리
      const data = {
        id: db.applys.length + 1,
        status: 'WAITING'
      };
      // add the new user to the database
      db.applys.push({
        id: data.id,
        status: data.status,
        type,
        start_date,
        end_date,
        user_id: 1
      });

      return res(
        ctx.status(200),
        ctx.json({
          status: 200,
          msg: '성공',
          data: {
            id: 1, // 연차/당직(Leave 테이블)의 id
            type: 'ANNUAL',
            usingDays: 1, // 신청한 연차 일수 (당직이면 0)
            remainDays: 14, // 해당 유저의 남은 연차 일수
            status: 'WAITING' // 대기 상태 (성공하면 다 WAITING으로 뜸)
          }
        })
      );
    } catch {
      ctx.json({
        status: 401,
        msg: 'Unauthorized',
        data: 'Error'
      });
    }
  }),
  // 연차/당직 신청 취소
  rest.post('/auth/leave/{:id}/delete', (req, res, ctx) => {
    const { id } = req.params;
    // 여기서 id를 이용해서 실제 데이터베이스에서 해당 leave 정보를 삭제하는 로직을 구현해줍니다.
    db.applys = db.applys.filter((leave) => leave.id !== Number(id));
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        msg: 'success'
      })
    );
  }),
  // 모든 유저의 연차/당직 정보 가져오기
  rest.get('/auth/leave', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: '200',
        msg: 'success',
        data: db.schedules
      })
    );
  }),
  // 특정 유저의 연차/당직 정보 가져오기
  rest.get('/auth/leave?id=[userId]', (req, res, ctx) => {
    const userId = req.url.searchParams.get('id');
    const userLeaves = db.applys.filter((data) => data.user_id === Number(userId));

    return res(
      ctx.status(200),
      ctx.json({
        status: '200',
        msg: 'success',
        data: userLeaves
      })
    );
  }),
  // 로그인한 사용자의 알림 목록 가져오기
  rest.get('/auth/alarm', (req, res, ctx) => {
    const data = [
      { id: 1, content: '승인되었습니다.' },
      { id: 2, content: '새로운 알림이 있습니다.' }
    ];
    return res(ctx.status(200), ctx.json({ status: '200', msg: '성공', data }));
  }),
  // 연차/당직 승인 여부 결정
  rest.post('/auth/manager/approve', async (req, res, ctx) => {
    try {
      const { id, status } = await req.json();

      // Leave 테이블에서 id와 일치하는 연차/당직 정보를 수정
      // 수정된 정보를 가져와 data에 담아 반환
      const oldData = db.applys.find((leave) => leave.id === Number(id));
      const updatedData = { ...oldData, status };
      // oldData를 db에서 찾아서 updateData로 업데이트
      db.applys = db.applys.map((leave) => (leave.id === Number(id) ? updatedData : leave));

      return res(
        ctx.status(200),
        ctx.json({
          status: 200,
          msg: 'success',
          data: updatedData
        })
      );
    } catch {
      ctx.json({
        status: 401,
        msg: 'Unauthorized',
        data: 'Error'
      });
    }
  }),
  // 유저 연차 일수 조정
  rest.post('/auth/admin/annual/{id}', async (req, res, ctx) => {
    try {
      const { id } = req.params;
      const { annual_limit } = await req.json();

      // Do something with the updated data, such as saving to a database

      return res(
        ctx.status(200),
        ctx.json({
          status: 200,
          msg: 'success',
          data: {
            id: Number(id),
            annual_limit: annual_limit
          }
        })
      );
    } catch {
      ctx.json({
        status: 401,
        msg: 'Unauthorized',
        data: 'Error'
      });
    }
  }),
  // 유저 권한 변경
  rest.post('/auth/admin/role/{id}', async (req, res, ctx) => {
    try {
      const { id } = req.params;
      const { role } = await req.json();

      const userIndex = db.users.findIndex((user) => user.id === Number(id));

      if (userIndex === -1) {
        return res(ctx.status(404), ctx.json({ message: 'User not found' }));
      }

      const updatedUser = { ...db.users[userIndex], role };

      db.users[userIndex] = updatedUser;

      return res(ctx.status(200), ctx.json({ status: '200', msg: 'success', data: updatedUser }));
    } catch {
      ctx.json({
        status: 401,
        msg: 'Unauthorized',
        data: 'Error'
      });
    }
  }),

  // 유저 목록 불러오기
  rest.get('/auth/admin', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        db.users.map((user) => ({
          userId: user.id,
          username: user.username,
          hire_date: user.hire_date,
          annual_limit: user.annual_limit,
          profile: user.profile
        }))
      )
    );
  }),

  // 관리자용 연차당직 정보 가져오기
  rest.get('/admin/leave', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: db.leave.map((leave) => ({
          id: leave.id,
          username: leave.username,
          profile: leave.profile,
          type: leave.type,
          status: leave.status,
          startDate: leave.startDate,
          endDate: leave.endDate
        }))
      })
    );
  })
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
