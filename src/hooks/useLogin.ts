import { useMutation } from 'react-query';
import { login } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(login, {
    onSuccess: async (data) => {
      // 로그인 성공 시 처리할 코드
      setCookie('accessToken', data.headers.authorization);
      setCookie('refreshToken', data.headers.refreshtoken);
      navigate('/');
    }
  });

  return mutate;
};
