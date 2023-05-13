import { useMutation } from 'react-query';
import { getUserData, login } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { useDispatch } from 'react-redux';
import loginedUser, { userLogin } from '../store/reducers/userReducers';

export const useLogin = () => {
  const dispatch = useDispatch();
  const { mutate } = useMutation(login, {
    onSuccess: async (data) => {
      // 로그인 성공 시 처리할 코드
      setCookie('accessToken', data.headers.authorization);
      const userData = await getUserData();
      dispatch(userLogin(userData.data.data));
    }
  });

  return mutate;
};
