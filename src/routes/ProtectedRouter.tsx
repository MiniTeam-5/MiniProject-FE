import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useVerifyToken from '../hooks/useVerifyToken';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function ProtectedRouter() {
  const queryClient = useQueryClient();
  const { isAuthenticated, isLoading } = useVerifyToken();
  const loginedUser = useSelector((state: RootState) => state.loginedUser);
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
    if (isAuthenticated === 'SUCCESS' && pathname === '/admin' && loginedUser.role !== 'ROLE_USER') {
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
