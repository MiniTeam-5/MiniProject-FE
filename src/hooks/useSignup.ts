import { useMutation } from 'react-query';
import { signup } from '../apis/auth';

export const useSignup = () => {
  const { mutate } = useMutation(signup, {
    onSuccess: (data) => {
      // 회원가입 성공 시 처리할 코드
      console.log(data);
    }
  });

  return mutate;
};
