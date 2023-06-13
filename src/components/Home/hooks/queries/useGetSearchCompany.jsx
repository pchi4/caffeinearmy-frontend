import { useQuery } from "react-query"
import api from '../../../../api/api'
import Swal from "sweetalert2"
import { useQueryKey } from "../useQueryKey"

export const useGetSearchCompany = ({ cnpj }) => {
    return useQuery(
        [...useQueryKey('getCompany', { cnpj })], () => api.get(`/empresa/${cnpj}`).then(({ data }) => data),
        {
            enabled: !!cnpj,
            refetchOnWindowFocus: false,
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