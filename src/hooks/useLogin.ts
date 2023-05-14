import { useMutation } from 'react-query';
import { getUserData, login } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/reducers/userReducers';
import { useNavigate } from 'react-router-dom';
import { setChecked, setEmail } from '../store/reducers/rememberEmailSlice';

export const useLogin = (isChecked: boolean) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation(login, {
    onSuccess: async (data) => {
      // 로그인 성공 시 처리할 코드
      setCookie('accessToken', data.headers.authorization);
      const userData = await getUserData();
      if (isChecked) {
        dispatch(setEmail(userData.data.data.email));
        dispatch(setChecked(true));
      } else {
        dispatch(setEmail(''));
        dispatch(setChecked(false));
      }
      dispatch(userLogin(userData.data.data));

      setCookie('refreshToken', data.headers.refreshtoken);
      navigate('/');
    }
  });

  return mutate;
};
