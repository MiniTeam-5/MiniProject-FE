import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { refresh, verify } from '../apis/auth';
import { getToken, setToken } from '../utils/userTokenCookie';

type authType = 'PENDING' | 'SUCCESS' | 'FAILED';

function useVerifyToken() {
  const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING');

  const token = getToken();
  const verifyResult = useQuery(['auth', 'verify', token], verify, {
    onSuccess: () => {
      setIsAuthenticated('SUCCESS');
    },
    onError: () => {
      setIsAuthenticated('FAILED');
    },
    retry: 0,
    enabled: !!token
  });

  const refreshResult = useQuery(['auth', 'refresh'], refresh, {
    onSuccess: (data) => {
      if (data.content) {
        setToken(data.accessToken, {
          path: '/',
          maxAge: data.content.exp - data.content.iat
        });
        setIsAuthenticated('SUCCESS');
      }
    },
    onError: () => {
      setIsAuthenticated('FAILED');
    },
    retry: 0,
    enabled: !token
  });

  return isAuthenticated;
}

export default useVerifyToken;
