import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./LoginStyle.module.css";
import useLoginHook from './useLoginHook'

export default function FormLogin() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { Login } = useLoginHook();

  return (
    <Form className="m-4">
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Seu e-mail</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          placeholder="Seu email"
          onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Senha</Form.Label>
        <Form.Control
          className="form-control"
          type="password"
          placeholder="Sua senha"
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="d-grid gap-2 mt-4">
        <Button class="btn" className={styles.pink} onClick={Login(username, password)}>
          Entrar
        </Button>
      </Form.Group>
    </Form>
  );
}
