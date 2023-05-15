import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import useVerifyToken from '../hooks/useVerifyToken';

function ProtectedRouter() {
  const queryClient = useQueryClient();
  const { isAuthenticated, isLoading } = useVerifyToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === 'FAILED' && !isLoading) {
      queryClient.clear();
      navigate('/login');
    }
  }, [isAuthenticated]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouter;
