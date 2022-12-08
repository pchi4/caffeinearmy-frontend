import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import api from "../../../api/api";

export default function ModalCadastroUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAlert, setAlert] = useState(false);
  const [showForm, setForm] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const registerUSer = data => {
    try {
      api.post(`/usuario/cadastrar`, data)
      setAlert(true);
      setForm(false)

      setTimeout(() => {
        setAlert(false);
        handleClose();
        setForm(true)
      }, 3000);

    } catch (error) {
      console.log(error)
    }
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
          {showForm && (<form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Nome:
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Seu nome"
                {...register("name", { required: "Nome é obrigatório" })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <p className="text-danger" role="alert">{errors.name?.message}</p>}
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email:{" "}
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="name@example.com"
                {...register("email", { required: "Email é obrigatório" })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p className="text-danger" role="alert">{errors.email?.message}</p>}
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Telefone:{" "}
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="(xx) x-xxxx-xxxx"

                {...register("telefone", { require: 'This is required' })}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Senha
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="Sua senha"
                {...register("password", {
                  required: "Senha é obrigatório",
                  minLength: {
                    value: 8,
                    message: "Senha muito pequena"
                  }
                })}
              />
              <p className="text-danger" role="alert">{errors.password?.message}</p>
            </div>
          </form>)}
          {showAlert && (
            <Alert variant="success">Cadastro realizado com sucesso!</Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit(registerUSer)}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
