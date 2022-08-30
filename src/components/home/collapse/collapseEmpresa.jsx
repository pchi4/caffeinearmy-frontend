import './style.css';

export default function CollapseEmpresa({empresa}){
    return(
        <div>
            <div className="accordion m-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            DADOS DA LOJA
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-12 col-md-6 p-1"><span><span className="fw-bold">CNPJ:</span> {empresa.cnpj}</span></div>
                                    <div className="col-12 col-md-6 p-1"><span><span className="fw-bold">E-mail:</span> {empresa.email}</span></div>
                                    <div className="w-100"></div>
                                    <div className="col-12 col-md-6 p-1"><span><span className="fw-bold">Nome Fantasia:</span> {empresa.nomeFantasia}</span></div>
                                    <div className="col-12 col-md-6 p-1"><span><span className="fw-bold">Telefone:</span> {empresa.telefone}</span></div>
                                    <div className="col-12 col-md-6 p-1"><span ><span className="fw-bold">Razão Social:</span> {empresa.razaoSocial}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}