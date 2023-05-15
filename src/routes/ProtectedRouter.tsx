import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useVerifyToken from '../hooks/useVerifyToken';

function ProtectedRouter() {
  const queryClient = useQueryClient();
  const { isAuthenticated, isLoading } = useVerifyToken();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === 'FAILED' && !isLoading) {
      queryClient.clear();
      navigate('/login');
    }
    if (isAuthenticated === 'SUCCESS' && (pathname === '/login' || pathname === '/signup')) {
      navigate('/');
    }
  }, [isAuthenticated]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouter;
