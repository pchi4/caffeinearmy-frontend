
import NavBar from "../Layouts/NavBar";
import style from "../Home/HomeStyle.module.css";
import FormSearchCompany from "./FormSearchCompany";

export default function indexHome() {

  return (
    <div>
      <div className={style.mxNav}>
        <NavBar />
      </div>
      <div className="text-danger border-bottom border-muted"></div>
      <div class="d-sm" className={style.background} style={{ height: '100vh' }}>
        <div className={style.content}>
          <FormSearchCompany />
        </div>
      </div>
    </div>
  );
}
