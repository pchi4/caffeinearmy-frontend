import style from '../HomeStyle.module.css';
import { Accordion } from 'react-bootstrap';

export default function CollapseEmpresa({ empresa }) {
  return (
    <>
      {empresa && (
        <div className="m-4">
          <div class="m-5 text-center fw-bold">
            <h5 class="fw-bold">DADOS CADASTRAIS</h5>
          </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>DADOS DA LOJA</Accordion.Header>
              <Accordion.Body className={style.acordionBodyMb}>
                <div class="container p-3" className={style.backMobile}>
                  <div class="row p-3">
                    <div class="col-12 col-md-6 col-sm-6 p-1 ">
                      <span>
                        <span class="fw-bold">CNPJ:</span> {empresa?.cnpj}
                      </span>
                    </div>
                    <div class="col-12 col-md-6 col-sm-6 p-1 ">
                      <span>
                        <span class="fw-bold">E-mail:</span> {empresa?.email}
                      </span>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-12 col-md-6 col-sm-6 p-1 ">
                      <span>
                        <span class="fw-bold">Nome Fantasia:</span>
                        {empresa?.nomeFantasia}
                      </span>
                    </div>
                    <div class="col-12 col-md-6 col-sm-6 p-1 ">
                      <span>
                        <span class="fw-bold">Telefone:</span>
                        {empresa?.telefone}
                      </span>
                    </div>
                    <div class="col-12 col-md-6 col-sm-6 p-1 ">
                      <span>
                        <span class="fw-bold">Razão Social:</span>
                        {empresa?.razaoSocial}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
    </>
  );
}
