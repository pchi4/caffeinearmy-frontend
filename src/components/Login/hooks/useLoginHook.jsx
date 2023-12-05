import { login } from '../../../services/auth';
import { useHistory } from 'react-router-dom';
import api from '../../../api/api';
import Swal from 'sweetalert2';

const useLoginHook = () => {
  let history = useHistory();

  const Login = async (data) => {
    try {
      const response = await api.post('/usuario/login', data);

      login(response.data.token);

      if (login) {
        return history.push('/home');
      }

      return;
    } catch (error) {
      Swal.fire({
        title: error ? error.response?.data.error : error.mensagem,
        text: error.response.data.message,
        icon: 'error'
      });
    }
  };

  return {
    Login
  };
};

export default useLoginHook;
