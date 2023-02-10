
import NavBar from "../layouts/NavBar";
import style from "../home/HomeStyle.module.css";
import FormBuscarLoja from "./FormBuscarLoja";

export default function indexHome() {

  return (
    <div>
      <div className={style.mxNav}>
        <NavBar />
      </div>
      <div className="text-danger border-bottom border-muted"></div>
      <div class="d-sm" className={style.background}>
        <div className={style.content}>
          <FormBuscarLoja />
        </div>
      </div>
    </div>
  );
}
