import { useMutation, useQueryClient } from 'react-query';
import api from '../../../../api/api';
import Swal from 'sweetalert2';

const registerUser = async (payload) => {
  return await api.post('/usuario/cadastrar', payload);
};

export const usePostRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (payload) => await registerUser(payload),

    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getCompany'] });

        Swal.fire({
          title: 'Usuário cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      },
      onError: (error) => {
        Swal.fire({
          title: error ? error.response?.data.message : error.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    }
  );
};
