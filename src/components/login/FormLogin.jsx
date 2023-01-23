import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./LoginStyle.module.css";
import useLoginHook from './hooks/useLoginHook'


export default function FormLogin() {

  const { Login } = useLoginHook();
  const [form, setValues] = useState({
    username: '',
    password: '',
  });


  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const printValues = e => {
    e.preventDefault();
    Login(form)
  };

  return (
    <Form className="m-4">
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Seu e-mail</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          placeholder="Seu email"
          value={form.username}
          onChange={updateField}
          required={true}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Senha</Form.Label>
        <Form.Control
          className="form-control"
          type="password"
          placeholder="Sua senha"
          value={form.password}
          onChange={updateField}
          required={true}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="d-grid gap-2 mt-4">
        <Button class="btn" className={styles.pink} onClick={printValues}>
          Entrar
        </Button>
      </Form.Group>
    </Form>
  );
}
