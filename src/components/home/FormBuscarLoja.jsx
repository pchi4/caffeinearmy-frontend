import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import styles from "../home/HomeStyle.module.css";

export default function FormBuscarLoja(props) {
  const [target, setTarget] = useState();

  function noneInput(e) {
    var teste = e.target.value.length;
    setTarget(teste);
  }

  return (
    <div className={styles.backMobile}>
      <div class="d-flex justify-content-evenly align-items-center">
        <Form className="w-100" onSubmit={props.formSubmit}>
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
                type="text"
                className="form-control w-75"
                name="cnpj"
                onChange={(e) => props.setCnpj(e.target.value)}
                placeholder="         Digite um CNPJ"
                onKeyDown={noneInput}
              />
              <Button className="btn btn-secondary d-sm-block d-md-none m-2" type="submit">
                <FaArrowRight />
              </Button>
              <Button className="btn btn-danger d-none d-md-block d-lg-block m-2" type="submit">
                Buscar Loja
              </Button>
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
