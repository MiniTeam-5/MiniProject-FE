import { useMutation } from 'react-query';
import { getUserData, login } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/reducers/userReducers';
import { useNavigate } from 'react-router-dom';
import { setRemember } from '../store/reducers/rememberEmailSlice';
import Swal from 'sweetalert2';

export const useLogin = (checked: boolean) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation(login, {
    onSuccess: async (data) => {
      // 로그인 성공 시 처리할 코드
      setCookie('accessToken', data.headers.authorization);
      const userData = await getUserData();
      dispatch(setRemember({ email: userData.data.data.email, checked }));
      dispatch(userLogin(userData.data.data));

      setCookie('refreshToken', data.headers.refreshtoken);
      navigate('/');
    },
    onError: (error) => {
      // 실패 시 처리할 코드
      Swal.fire({
        title: '로그인 실패',
        text: '이메일 혹은 비밀번호가 일치하지 않습니다.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
  });

  return mutate;
};
