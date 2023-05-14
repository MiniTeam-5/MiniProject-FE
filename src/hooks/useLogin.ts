import { useMutation } from 'react-query';
import { getUserData, login } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/reducers/userReducers';
import { useNavigate } from 'react-router-dom';

export const useLogin = (isChecked: boolean) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation(login, {
    onSuccess: async (data) => {
      // 로그인 성공 시 처리할 코드
      setCookie('accessToken', data.headers.authorization);
      const userData = await getUserData();
      dispatch(userLogin(userData.data.data));

      if (isChecked) localStorage.setItem('userEmail', userData.data.data.email);
      localStorage.setItem('rememberMe', isChecked ? 'true' : 'false');

      setCookie('refreshToken', data.headers.refreshtoken);
      navigate('/');
    }
  });

  return mutate;
};
