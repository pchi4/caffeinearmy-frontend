import { useMutation, useQueryClient } from "react-query"
import api from '../../../../api/api'
import Swal from "sweetalert2"

export const usePostRegisterUser = () => {
    const queryClient = useQueryClient()

    return useMutation(
        async (payload) => await

            api.post('/usuario/cadastrar', payload).then(({ data }) => data),

        {
            onSuccess: () => {

                queryClient.invalidateQueries({ queryKey: ['getCompany'] })

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
    )
}