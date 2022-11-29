import styles from "./LoginStyle.module.css";

export default function FormLogin(props) {
  return (
    <form className="m-4">
      <div className="mb-4">
        <label className="form-label">Seu e-mail</label>
        <input
          type="email"
          className="form-control"
          placeholder="Seu email"
          onChange={(e) => props.setUsername(e.target.value)}
        ></input>
      </div>
      <div className="mb-4">
        <label className="form-label">Senha</label>
        <input
          className="form-control"
          type="password"
          placeholder="Sua senha"
          onChange={(e) => props.setPassword(e.target.value)}
        ></input>
      </div>
      <div className="d-grid gap-2 mt-4">
        <button class="btn" className={styles.pink} onClick={props.Login}>
          Entrar
        </button>
      </div>
    </form>
  );
}
