import style from './HomeStyle.module.css';

export default function Content() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div class="h4 text-danger border-bottom border-muted my-4"></div>
      <div class="m-3 p-1 text-center">
        <h4 class="fw-bold">
          <img
            src="/icone_loja_roxo.svg"
            alt="icone roxo da loja"
            class="rounded-circle bg-info"
            className={style.iconCircle}
          ></img>{' '}
          LOJA DE SUPLEMENTOS{' '}
          <span class="text-muted d-none d-sm-inline m-2">
            - LOJA DE SUPLEMENTOS LTDA.
          </span>
        </h4>
      </div>
      <div>
        <div class="m-3 text-center py-4">
          <h5 class="fw-bold">INFORMAÇÕES ADICIONAIS</h5>
        </div>
      </div>
      <div class="p-1" className={style.backMobileCard}>
        <div class="card">
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}
