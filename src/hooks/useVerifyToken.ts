import { useState } from 'react';
import { useQuery } from 'react-query';
import { getUserData, refresh } from '../apis/auth';
import { useDispatch } from 'react-redux';
import { setCookie } from '../utils/cookies';
import { userLogin } from '../store/reducers/userReducers';
type authType = 'PENDING' | 'SUCCESS' | 'FAILED';

function useVerifyToken() {
  const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING');
  const dispatch = useDispatch();
  const { isLoading } = useQuery('refresh', refresh, {
    onSuccess: async (data) => {
      setIsAuthenticated('SUCCESS');
      setCookie('accessToken', data.headers.authorization);
      const userData = (await getUserData()).data.data;
      dispatch(userLogin(userData));
    },
    onError: () => {
      setIsAuthenticated('FAILED');
    },
    retry: 0,
    staleTime: Infinity
  });

  return { isAuthenticated, isLoading };
}

export default useVerifyToken;
