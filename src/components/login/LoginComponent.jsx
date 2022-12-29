import ModalCadastroUser from "../home/modal/ModalCadastroUser";
import ImagemComponent from "./ImagemComponent";
import LoaddingComponent from "../loadding/LoaddingComponent";
import FormLogin from "./FormLogin";
import FooterLogin from "./FooterLogin";
import { useState } from "react";
import { login } from "../../services/auth";
import { useHistory } from "react-router-dom";
import api from "../../api/api";
import styles from "../login/LoginStyle.module.css";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { Alert } from "react-bootstrap";

export default function LoginComponent() {
  let history = useHistory();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showLoadding, setLoadding] = useState(false);
  const [showForm, setForm] = useState(true);
  const [showAlert, setAlert] = useState(false);

  async function Login(e) {
    e.preventDefault();

    setLoadding(true);
    setForm(false);

    try {
      const response = await api.post("/usuario/login", {
        username,
        password,
      });

      login(response.data.token);
      findUser(response.data.id);
      setLoadding(false);
      setForm(true);
    } catch (err) {
      console.log(err);
      setLoadding(false);
      setForm(true)
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 3000)
    }
  }

  const findUser = async (id) => {
    try {
      const req = await api.get(`usuario/${id}`);
      let usuario = req.data;

      if (usuario.email === username) {
        return history.push("/home");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div>
        <ImagemComponent className={styles.imageLogin} />
      </div>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <img
            src="/marca_lojistas.svg"
            alt="marca lojistas"
            className={styles.svgLogin}
          />
          <br></br>
          <span className="d-none d-sm-block">
            <strong>Acesse com seu email e senha abaixo</strong>
          </span>
        </div>
        {showLoadding && <LoaddingComponent />}
        {showAlert && (
          <Alert variant="danger">Error ao tentar realizar o login</Alert>
        )}
        {showForm && (
          <FormLogin
            Login={Login}
            setPassword={setPassword}
            setUsername={setUsername}
          />
        )}
        <div class="m-4">
          <p className="text-center">
            Caso você não tenha acesso ao sistema, preciso que cadastre-se
          </p>
          <ModalCadastroUser />
        </div>
        <div className={styles.textFooter}>
          <FooterLogin />
        </div>
      </div>
    </div>
  );
}
