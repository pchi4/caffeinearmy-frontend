import { useMutation } from 'react-query';
import api from '../../../../api/api';
import Swal from 'sweetalert2';

const registerCompany = async (payload) => {
  return await api.post('/empresa/cadastrar', payload);
};

export const usePostRegisterCompany = () => {
  return useMutation(
    async (payload) => await registerCompany(payload),

    {
      onSuccess: () => {
        Swal.fire({
          title: 'Empresa cadastrada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      },
      onError: (error) => {
        Swal.fire({
          title: error ? error.message : error.response?.data.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    }
  );
};
