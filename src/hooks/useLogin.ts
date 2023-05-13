import { useMutation } from 'react-query';
import { getUserData, login } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { useDispatch } from 'react-redux';
import loginedUser, { userLogin } from '../store/reducers/userReducers';
import { useNavigate } from 'react-router-dom';
import store from '../store';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation(login, {
    onSuccess: async (data) => {
      // 로그인 성공 시 처리할 코드
      setCookie('accessToken', data.headers.authorization);
      const userData = (await getUserData()).data.data;
      dispatch(userLogin(userData));
      navigate('/');
    }
  });

  return mutate;
};
