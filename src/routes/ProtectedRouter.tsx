import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
// import useVerifyToken from '../hooks/useVerifyToken';
import { useSelector } from 'react-redux';

function ProtectedRouter() {
  const queryClient = useQueryClient();
  const loginedUser = useSelector((state) => state.loginedUser);
  // const isAuthenticated = useVerifyToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginedUser.id) {
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
