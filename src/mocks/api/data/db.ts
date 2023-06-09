export const loginData = {};

export const db = {
  users: [
    {
      id: 1,
      username: '김테슽',
      email: 'user@example.com',
      password: '12345678',
      role: 'USER',
      profile: 'example_profile_data',
      annual_limit: 15,
      annual_count: 2,
      hire_date: '2023-04-27',
      status: true
    },
    {
      id: 2,
      username: '박사원',
      email: 'user2@example.com',
      password: '12345678',
      role: 'ADMIN',
      profile: 'example_profile_data',
      annual_limit: 15,
      annual_count: 2,
      hire_date: '2021-04-27',
      status: true
    }
  ],
  applys: [
    { id: 1, status: 'waiting', type: 'duty', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 1 },
    { id: 2, status: 'waiting', type: 'annual', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 2 },
    { id: 3, status: 'rejected', type: 'duty', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 1 },
    { id: 4, status: 'waiting', type: 'annual', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 2 },
    { id: 5, status: 'approved', type: 'duty', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 3 },
    { id: 6, status: 'approved', type: 'annual', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 4 }
  ],
  schedules: [
    { id: 1, username: '김사원', type: 'annual', status: 'approve', start_date: '2023-05-05', end_date: '2023-05-07' },
    { id: 1, username: '김사원', type: 'annual', status: 'wait', start_date: '2023-05-27', end_date: '2023-05-28' },
    { id: 1, username: '김사원', type: 'duty', status: 'approve', start_date: '2023-05-27', end_date: '2023-05-27' },
    { id: 1, username: '김사원', type: 'duty', status: 'wait', start_date: '2023-05-10', end_date: '2023-05-10' },
    { id: 2, username: '박사원', type: 'duty', status: 'approve', start_date: '2023-05-21', end_date: '2023-05-21' },
    { id: 3, username: '나사원', type: 'duty', status: 'wait', start_date: '2023-05-10', end_date: '2023-05-10' },
    { id: 4, username: '이사원', type: 'annual', status: 'approve', start_date: '2023-05-05', end_date: '2023-05-07' },
    { id: 2, username: '박사원', type: 'annual', status: 'approve', start_date: '2023-05-17', end_date: '2023-05-18' },
    { id: 5, username: '정사원', type: 'annual', status: 'wait', start_date: '2023-05-14', end_date: '2023-05-15' },
    { id: 6, username: '최사원', type: 'annual', status: 'wait', start_date: '2023-05-09', end_date: '2023-05-10' },
    { id: 7, username: '신사원', type: 'duty', status: 'approve', start_date: '2023-06-10', end_date: '2023-06-10' },
    { id: 8, username: '황사원', type: 'annual', status: 'wait', start_date: '2023-06-10', end_date: '2023-06-12' },
    { id: 9, username: '진사원', type: 'duty', status: 'approve', start_date: '2023-05-21', end_date: '2023-05-21' },
    { id: 10, username: '유사원', type: 'annual', status: 'wait', start_date: '2023-05-24', end_date: '2023-05-24' },
    { id: 11, username: '구사원', type: 'annual', status: 'wait', start_date: '2023-05-21', end_date: '2023-05-21' }
  ],
  leave: [
    {
      id: 1,
      userId: 1,
      username: '김사원',
      profile: 'https://picsum.photos/30',
      type: 'ANNUAL',
      status: 'WAITING',
      startDate: '2023-05-20',
      endDate: '2023-05-22'
    },
    {
      id: 2,
      userId: 2,
      username: '박사원',
      profile: null,
      type: 'DUTY',
      status: 'WAITING',
      startDate: '2023-05-24',
      endDate: '2023-05-24'
    },
    {
      id: 3,
      userId: 3,
      username: '이사원',
      profile: 'https://picsum.photos/30',
      type: 'DUTY',
      status: 'WAITING',
      startDate: '2023-05-26',
      endDate: '2023-05-27'
    },
    {
      id: 4,
      userId: 4,
      username: '유사원',
      profile: 'https://picsum.photos/30',
      type: 'ANNUAL',
      status: 'WAITING',
      startDate: '2023-05-27',
      endDate: '2023-05-28'
    },
    {
      id: 5,
      userId: 5,
      username: '김사원',
      profile: 'https://picsum.photos/30',
      type: 'ANNUAL',
      status: 'WAITING',
      startDate: '2023-05-27',
      endDate: '2023-05-28'
    }
  ]
};
