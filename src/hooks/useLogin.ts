import { useMutation } from 'react-query';
import { login } from '../apis/auth';
import { setCookie } from '../utils/cookies';

export const useLogin = () => {
  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      // 로그인 성공 시 처리할 코드
      console.log(data);
      setCookie('accessToken', data.headers.authorization);
    }
  });

  return mutate;
};
