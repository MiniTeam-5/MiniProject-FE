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
    { id: 1, status: 'WAITING', type: 'DUTY', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 1 },
    { id: 2, status: 'WAITING', type: 'ANNUAL', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 2 },
    { id: 1, status: 'REJECTED', type: 'DUTY', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 1 },
    { id: 2, status: 'WAITING', type: 'ANNUAL', start_date: '2021-04-27', end_date: '2021-04-27', user_id: 2 }
  ]
};
