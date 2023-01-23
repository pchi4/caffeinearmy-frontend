
import api from "../../api/api";

const userFindOneHook = (username) => {



    const findUser = async (id) => {
        try {
            const req = await api.get(`usuario/${id}`);
            let usuario = req.data;

            if (usuario.email === username) {

            }

        } catch (error) {
            console.log(error);
        }
    };

    return {
        findUser
    }
}

export default userFindOneHook;