import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./LoginStyle.module.css";
import useLoginHook from "./hooks/useLoginHook";
import { useForm } from "react-hook-form";
import React from "react";
import { UserCredentials } from "./hooks/useLoginHook";

export default function FormLogin() {
  const { Login } = useLoginHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    Login(data);
  };

  return (
    <Form className="m-4">
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Seu e-mail</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          placeholder="Seu email"
          {...register("email", { required: "Campo é obrigatório" })}
          aria-invalid={errors.email ? "true" : "false"}
        ></Form.Control>
        {errors.email && (
          <p className="text-danger my-1" role="alert">
            <strong>{errors.username?.message}</strong>
          </p>
        )}
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Senha</Form.Label>
        <Form.Control
          className="form-control"
          type="password"
          placeholder="Sua senha"
          {...register("password", { required: "Campo é obrigatório" })}
          aria-invalid={errors.password ? "true" : "false"}
        ></Form.Control>
        {errors.password && (
          <p className="text-danger my-1" role="alert">
            <strong>{errors.password?.message}</strong>
          </p>
        )}
      </Form.Group>
      <Form.Group className="d-grid gap-2 mt-4">
        <Button
          class="btn"
          className={styles.pink}
          onClick={handleSubmit(submitForm)}
        >
          Entrar
        </Button>
      </Form.Group>
    </Form>
  );
}
