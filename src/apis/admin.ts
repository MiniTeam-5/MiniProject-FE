import { axiosInstance } from './instance';
import { LeaveResponse } from '../interfaces/applicationStatus';

export const fetchLeaveList = async () => {
  const response = await axiosInstance().get<LeaveResponse>('/admin/leave');
  return response.data;
};

export const approveLeave = async (data: { id: number; status: string }) => {
  const response = await axiosInstance().post('/admin/approve', data);
  return response.data;
};
