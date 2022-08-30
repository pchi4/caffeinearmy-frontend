
import './style.css';

export default function CollapseLojista({empresa}){
    return (
        <div>
            <div className="accordion m-3" id="accordionExample2">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                        LOJISTA
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                        <div className="container p-3">
                            <div className="row">
                                <div className="col-12 col-md-6 p-1 "><span><span className="fw-bold">Nome:</span> {empresa.nomeLojista} </span></div>
                                <div className="col-12 col-md-6 p-1 "><span><span className="fw-bold">Telefone 1:</span> {empresa.telefoneLojista1} </span></div>
                                <div className="w-100"></div>
                                <div className="col-12 col-md-6 p-1 "><span><span className="fw-bold">Email:</span> {empresa.emailLojista}</span></div>
                                <div className="col-12 col-md-6 p-1 "><span><span className="fw-bold">Telefone 2:</span>{empresa.telefoneLojista2} </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}