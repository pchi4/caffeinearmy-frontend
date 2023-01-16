import ModalCadastroUser from "../home/modal/ModalCadastroUser";
import ImagemComponent from "./ImagemComponent";
import LoaddingComponent from "../loadding/LoaddingComponent";
import FormLogin from "./FormLogin";
import FooterLogin from "./FooterLogin";
import { useState } from "react";
import styles from "../login/LoginStyle.module.css";

// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { Alert } from "react-bootstrap";


export default function LoginComponent(props) {


  const [showLoadding, setLoadding] = useState(false);
  const [showForm, setForm] = useState(true);
  const [showAlert, setAlert] = useState(false);

  /*     async function Login(e) {
        e.preventDefault();
  
        setLoadding(true);
        setForm(false);
  
  
      } */


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
          <FormLogin />
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
