import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { usePostRegisterUser } from '../hooks/mutatios';
import LoadingComponent from '../../loadding/LoaddingComponent';

export default function RegisterUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { mutate: registerUser, isLoading } = usePostRegisterUser();

  const onSubmit = (data) => {
    registerUser(data);
    setShow(false);
  };

  if (isLoading) {
    return <LoadingComponent />;
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Nome*:</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Seu nome"
                {...register('name', { required: 'Nome é obrigatório' })}
                aria-invalid={errors.name ? 'true' : 'false'}
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
                {...register('email', { required: 'Email é obrigatório' })}
                aria-invalid={errors.email ? 'true' : 'false'}
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
                {...register('telefone', {
                  required: 'Telefone é obrigatório'
                })}
                aria-invalid={errors.telefone ? 'true' : 'false'}
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
                {...register('password', {
                  required: 'Senha é obrigatório',
                  minLength: {
                    value: 8,
                    message: 'Senha muito pequena'
                  }
                })}
              />
              <p className="text-danger my-1" role="alert">
                <strong>{errors.password?.message}</strong>
              </p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
