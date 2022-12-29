import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import styles from "../home/HomeStyle.module.css";
import { useForm } from "react-hook-form";

export default function FormBuscarLoja(props) {
  const [target, setTarget] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();

  function noneInput(e) {
    var teste = e.target.value.length;
    setTarget(teste);
  }

  return (
    <div className={styles.backMobile}>
      <div class="d-flex justify-content-evenly align-items-center">
        <Form className="w-100">
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
                onChange={(e) => props.setCnpj(e.target.value)}
                placeholder="         Digite um CNPJ"
                onKeyDown={noneInput}
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
                onClick={handleSubmit(props.formSubmit)}>
                <FaArrowRight />
              </Button>
              <Button
                className="btn btn-danger d-none d-md-block d-lg-block m-2"
                onClick={handleSubmit(props.formSubmit)}>
                Buscar Loja
              </Button>
              {errors.cnpj && <p className="text-danger my-3" role="alert"><strong>{errors.cnpj?.message}</strong></p>}
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
