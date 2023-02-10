import { login } from "../../../services/auth";
import { useHistory } from "react-router-dom";
import api from "../../../api/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// export interface UserCredentials {
//   email: string;
//   password: string;
// }

const useLoginHook = () => {
  const MySwal = withReactContent(Swal);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let history = useHistory();

  const Login = async (data) => {
    try {
      const response = await api.post("/usuario/login", data);

      login(response.data.token);

      if (login) {
        return history.push("/home");
      }

      return;
    } catch (error) {
      MySwal.fire({
        title: error.response.data.error,
        text: error.response.data.message,
        icon: "error",
      });
    }
  }

  return {
    Login,
  };
};

export default useLoginHook;
