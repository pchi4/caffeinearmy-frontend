import { useMutation } from "react-query"
import api from '../../../../api/api'
import Swal from "sweetalert2"

export const usePostRegisterCompany = () => {
    return useMutation(
        async (payload) => await

            api.post('/empresa/cadastrar', payload).then(({ data }) => data),

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
    )
}