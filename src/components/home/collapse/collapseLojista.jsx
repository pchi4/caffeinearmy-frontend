import style from '../HomeStyle.module.css';

export default function CollapseLojista({empresa}){
    return (
        <div className={style.collapse}>
            <div class="accordion m-3" id="accordionExample2">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                    LOJISTA
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                    <div class="accordion-body" className={style.acordionBodyMb}>
                        <div class="container p-3" className={style.backMobile}>
                            <div class="row p-3">
                                <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">Nome:</span> {empresa.nomeLojista} </span></div>
                                <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">Telefone 1:</span> {empresa.telefoneLojista1} </span></div>
                                <div class="w-100"></div>
                                <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">Email:</span> {empresa.emailLojista}</span></div>
                                <div class="col-12 col-md-6 p-1 "><span><span class="fw-bold">Telefone 2:</span>{empresa.telefoneLojista2} </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}