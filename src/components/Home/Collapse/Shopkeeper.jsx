import style from '../HomeStyle.module.css';
import { Accordion } from 'react-bootstrap';

export default function Shopkeeper({ empresa }) {
  return (
    <>
      {empresa && (
        <div className="m-4">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>LOJISTA</Accordion.Header>
              <Accordion.Body className={style.acordionBodyMb}>
                <div class="container p-3" className={style.backMobile}>
                  <div class="row p-3">
                    <div class="col-12 col-md-6 p-1 ">
                      <span>
                        <span class="fw-bold">Nome:</span>{' '}
                        {empresa?.nomeLojista}{' '}
                      </span>
                    </div>
                    <div class="col-12 col-md-6 p-1 ">
                      <span>
                        <span class="fw-bold">Telefone 1:</span>{' '}
                        {empresa?.telefoneLojista1}{' '}
                      </span>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-12 col-md-6 p-1 ">
                      <span>
                        <span class="fw-bold">Email:</span>{' '}
                        {empresa?.emailLojista}
                      </span>
                    </div>
                    <div class="col-12 col-md-6 p-1 ">
                      <span>
                        <span class="fw-bold">Telefone 2:</span>
                        {empresa?.telefoneLojista2}{' '}
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
