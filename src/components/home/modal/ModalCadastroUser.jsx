import React, { useState } from "react";
import { Modal, Button, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import api from "../../../api/api";

export default function ModalCadastroUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAlert, setAlert] = useState(false);
  const [showForm, setForm] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registerUser = (data) => {
    try {
      api.post(`/usuario/cadastrar`, data);
      setAlert(true);
      setForm(false);

      setTimeout(() => {
        setAlert(false);
        handleClose();
        setForm(true);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

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
          {showForm && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Nome*:</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Seu nome"
                  {...register("name", { required: "Nome é obrigatório" })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-danger my-1" role="alert">
                    <strong>{errors.name?.message}</strong>
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Email*: </Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  {...register("email", { required: "Email é obrigatório" })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-danger my-1" role="alert">
                    <strong>{errors.email?.message}</strong>
                  </p>
                )}
              </Form.Group>
              <Form.Group class="mb-3">
                <Form.Label className="form-label">Telefone*: </Form.Label>
                <Form.Control
                  type="text"
                  class="form-control"
                  placeholder="(xx) x-xxxx-xxxx"
                  {...register("telefone", {
                    required: "Telefone é obrigatório",
                  })}
                  aria-invalid={errors.telefone ? "true" : "false"}
                />
                {errors.telefone && (
                  <p className="text-danger my-1" role="alert">
                    <strong>{errors.telefone?.message}</strong>
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Senha*:</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  placeholder="Sua senha"
                  {...register("password", {
                    required: "Senha é obrigatório",
                    minLength: {
                      value: 8,
                      message: "Senha muito pequena",
                    },
                  })}
                />
                <p className="text-danger my-1" role="alert">
                  <strong>{errors.password?.message}</strong>
                </p>
              </Form.Group>
            </Form>
          )}
          {showAlert && (
            <Alert variant="success">Cadastro realizado com sucesso!</Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit(registerUser)}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
