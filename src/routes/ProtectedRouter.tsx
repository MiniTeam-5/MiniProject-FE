import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import useVerifyToken from '../hooks/useVerifyToken';

function ProtectedRouter() {
  const queryClient = useQueryClient();
  const isAuthenticated = useVerifyToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === 'FAILED') {
      queryClient.clear();
      navigate('/login');
    }
  });
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouter;
