import RegisterUser from "./Modal/RegisterUser";
import ImagemComponent from "./ImagemComponent";
import FormLogin from "./FormLogin";
import FooterLogin from "./FooterLogin";
import styles from "../Login/LoginStyle.module.css";

import React from "react";

export default function indexLogin() {
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
        <FormLogin />
        <div className="m-4">
          <p className="text-center">
            Caso você não tenha acesso ao sistema, preciso que cadastre-se
          </p>
          <RegisterUser />
        </div>
        <div className={styles.textFooter}>
          <FooterLogin />
        </div>
      </div>
    </div>
  );
}
