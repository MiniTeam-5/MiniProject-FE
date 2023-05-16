import { useMutation } from 'react-query';
import { signup } from '../apis/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const useSignup = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(signup, {
    onSuccess: () => {
      // 회원가입 성공 시 처리할 코드
      Swal.fire({
        title: '회원가입 성공',
        text: '회원가입이 정상적으로 처리되었습니다.',
        icon: 'success',
        confirmButtonText: '확인'
      });

      navigate('/login');
    },
    onError: (error) => {
      // 실패 시 처리할 코드
      Swal.fire({
        title: '회원가입 실패',
        text: '입력된 정보가 올바르지 못합니다. 다시 입력해주세요.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
  });

  return mutate;
};
