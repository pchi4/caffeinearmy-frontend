import api from "../../api/api";
import { useState } from "react";
import NavBar from "../layouts/NavBar";
import style from "../home/HomeStyle.module.css";
import CollapseLojista from "./collapse/collapseLojista";
import CollapseEmpresa from "./collapse/collapseEmpresa";
import ConteudoHome from "./conteudo/conteudoHome";
import FormBuscarLoja from "./FormBuscarLoja";
import { Alert } from 'react-bootstrap'

export default function indexHome() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cnpj, setCnpj] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [empresa, setEmpresa] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mensageErro, setMensageErro] = useState([undefined, false])

  async function formSubmit() {
    console.log(cnpj)

    // const regexCnpj = await cnpj.replace(/[^\d]+/g, "");

    try {
      const res = await api.get(`/empresa/${cnpj}`);
      setEmpresa(res.data);
    } catch (error) {
      console.log(error.response);
      setMensageErro(error.response.data.message, true)
      setTimeout(() => {
        setMensageErro('', false)
      }, 2000)
    }
  }

  return (
    <div>
      <div className={style.mxNav}>
        <NavBar />
      </div>
      <div className="text-danger border-bottom border-muted"></div>
      <div class="d-sm" className={style.background}>
        {mensageErro && <Alert variant="danger">{mensageErro}</Alert>}
        <div className={style.content}>
          <FormBuscarLoja formSubmit={formSubmit} setCnpj={setCnpj} />
          <ConteudoHome />
          <CollapseLojista empresa={empresa} />
          <CollapseEmpresa empresa={empresa} />
        </div>
      </div>
    </div>
  );
}
