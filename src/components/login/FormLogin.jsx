import styles from "./LoginStyle.module.css";
import { Button, Form } from "react-bootstrap";

export default function FormLogin(props) {
  return (
    <Form className="m-4">
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Seu e-mail</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          placeholder="Seu email"
          onChange={(e) => props.setUsername(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Senha</Form.Label>
        <Form.Control
          className="form-control"
          type="password"
          placeholder="Sua senha"
          onChange={(e) => props.setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="d-grid gap-2 mt-4">
        <Button class="btn" className={styles.pink} onClick={props.Login}>
          Entrar
        </Button>
      </Form.Group>
    </Form>
  );
}
