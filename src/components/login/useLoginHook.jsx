import { login } from "../../services/auth";
import { useHistory } from "react-router-dom";
import api from "../../api/api";

/* type UserCredentials = {
    username: string;
    password: string;
} */

const useLoginHook = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();

    async function Login(username, password) {

        try {
            const response = await api.post("/usuario/login", {
                username,
                password,
            });

            login(response.data.token);

            if (login) {
                return history.push("/home");
            }
            /*             setLoadding(false);
                        setForm(true); */
        } catch (err) {
            console.log(err);
            /*             setLoadding(false);
                        setForm(true)
                        setAlert(true)
                        setTimeout(() => {
                            setAlert(false)
                        }, 3000) */
        }
    }

    return {
        Login,
    }
}

export default useLoginHook;