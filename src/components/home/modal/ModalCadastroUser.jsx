import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import api from "../../../api/api";

export default function ModalCadastroUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [senha, setSenha] = useState();
  const [showAlert, setAlert] = useState(false);

  let user = {
    name: nome,
    email: email,
    telefone: telefone,
    password: senha,
  };

  function handleClick(event) {
    event.preventDefault();

    api
      .post(`/usuario/cadastrar`, user)
      .then((res) => {
        console.log(res.data);
        setAlert(true);

        setTimeout(() => {
          setAlert(false);
          handleClose();
        }, 3000);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Button variant="primary" className="w-100" onClick={handleShow}>
        Cadastre-se
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Nome:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Seu nome"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email:{" "}
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Telefone:{" "}
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="(xx) x-xxxx-xxxx"
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Senha
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Sua senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            {showAlert && (
              <Alert variant="success">Cadastro realizado com sucesso!</Alert>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
