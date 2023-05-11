export interface ILoginedUser {
  id: number;
  username: string;
  email: string;
  role: string;
  status: boolean;
  profile: string;
  annual_limit: number;
  annual_count: number;
}
