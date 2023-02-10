import api from "../../../api/api";
import { useState } from "react";


const useHomeHook = () => {

    const [mensageErro, setMensageErro] = useState([null, false])
    const [empresa, setEmpresa] = useState([]);

    const searchOwner = async ({ cnpj }) => {
        try {
            const res = await api.get(`/empresa/${cnpj}`);
            setEmpresa(res.data);
        } catch (error) {
            setMensageErro(error.response.data.message, true)
            setTimeout(() => {
                setMensageErro(null, false)
            }, 2000)
        }
    }

    return {
        searchOwner,
        mensageErro,
        empresa,
        setMensageErro
    };
}

export default useHomeHook;