import { useMutation } from 'react-query';
import { signup } from '../apis/auth';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(signup, {
    onSuccess: (data) => {
      // 회원가입 성공 시 처리할 코드
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    }
  });

  return mutate;
};
