import style from '../HomeComponent.module.css';

export default function CollapseEmpresa({empresa}){
    return(
        <div className={style.collapse}>
            <div class="accordion m-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            DADOS DA LOJA
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" className={style.acordionBodyMb}>
                            <div class="container p-3">
                                <div class="row">
                                    <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">CNPJ:</span> {empresa.cnpj}</span></div>
                                    <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">E-mail:</span> {empresa.email}</span></div>
                                    <div class="w-100"></div>
                                    <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">Nome Fantasia:</span> {empresa.nomeFantasia}</span></div>
                                    <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">Telefone:</span> {empresa.telefone}</span></div>
                                    <div class="col-12 col-md-6 p-1 "><span ><span class="fw-bold">Razão Social:</span> {empresa.razaoSocial}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}