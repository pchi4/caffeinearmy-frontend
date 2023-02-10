import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Form, Button, Alert } from "react-bootstrap";
import styles from "../home/HomeStyle.module.css";
import { useForm } from "react-hook-form";
import useHomeHook from "./hooks/useHomeHook";
import CollapseEmpresa from "./collapse/collapseEmpresa";
import CollapseLojista from "./collapse/collapseLojista";
import ConteudoHome from "./conteudo/conteudoHome";
import { useEffect } from "react";


export default function FormBuscarLoja() {
  const [target, setTarget] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { searchOwner, empresa, mensageErro, setMensageErro } = useHomeHook()


  useEffect(() => {
    setMensageErro(null, false)
  }, [])


  function noneInput(e) {
    var teste = e.target.value.length;
    setTarget(teste);
  }

  const handleValue = (data) => {
    searchOwner(data)
  }

  return (
    <>
      <div className={styles.backMobile}>
        <div class="d-flex justify-content-evenly align-items-center">
          <Form className="w-100">
            {mensageErro && <Alert variant="danger">{mensageErro}</Alert>}
            <Form.Group className="input-group p-3">
              <Form.Group className="input-group mb-3">
                {target >= 1 ? (
                  <i className={styles.iconNone}></i>
                ) : (
                  <i>
                    <FaSearch className={styles.iconInput} color="#dc3545" />
                  </i>
                )}
                <Form.Control
                  type="number"
                  className="form-control w-75"
                  name="cnpj"
                  placeholder="         Digite um CNPJ"
                  onKeyUp={noneInput}
                  // onFocus={noneInput}
                  {...register("cnpj", {
                    required: "CNPJ é obrigatório",
                    minLength: {
                      value: 11,
                      message: "CNPJ inválido"
                    }
                  })}
                  aria-invalid={errors.cnpj ? "true" : "false"}
                />
                <Button
                  className="btn btn-secondary d-sm-block d-md-none m-2"
                  onClick={handleSubmit(handleValue)}>
                  <FaArrowRight />
                </Button>
                <Button
                  className="btn btn-danger d-none d-md-block d-lg-block m-2"
                  onClick={handleSubmit(handleValue)}>
                  Buscar Loja
                </Button>
                {errors.cnpj && <p className="text-danger my-3" role="alert"><strong>{errors.cnpj?.message}</strong></p>}
              </Form.Group>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className={styles.content}>
        <ConteudoHome />
        <CollapseLojista empresa={empresa} />
        <CollapseEmpresa empresa={empresa} />
      </div>
    </>
  );
}
