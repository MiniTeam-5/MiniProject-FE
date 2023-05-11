export interface ILoginedUser {
  id: number;
  username: string;
  email: string;
  role: 'ROLE_USER' | 'ROLE_ADMIN' | 'ROLE_MASTER';
  profile: string;
  remainDays: number;
  hire_date: string;
}
