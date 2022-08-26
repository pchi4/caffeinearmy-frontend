import NavBar from "../layouts/NavBar";
import style from '../home/HomeComponent.module.css'

export default function HomeComponent(){
    return(
        <div>
            <NavBar></NavBar>
            <div className={style.background}>
                <div class="mt-5" className={style.content}>
                    <div class="d-flex m-4 justify-content-evenly">
                        <input class="form-control" className={style.inputSearch} type="text"  placeholder="Digite um CNPJ" aria-describedby="button-addon2"></input>
                        <button class="ml-3 btn btn-secondary"  className={style.btnColor}  type="button">Buscar Loja</button>
                    </div>
                    <div class="m-3">
                        <hr className={style.containerHome}></hr>
                    </div>
                    <div class="m-3 p-1 text-center">
                        <h4 class="fw-bold" className={style.estilosTitulos}><img src="/icone_loja_roxo.svg" className={style.svgLoja}></img> LOJA DE SUPLEMENTOS <span class="text-secondary">- LOJA DE SUPLEMENTOS LTDA.</span></h4>
                    </div>
                    <div class="m-5 text-center"> 
                        <h3 class="fw-bold">INFORMAÇÕES ADICIONAIS</h3>
                    </div>
                    <div class="card p-3 m-3">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div class="m-5 text-center fw-bold">
                        <h3 class="fw-bold">DADOS CADASTRAIS</h3>
                    </div>
                    <div class="accordion m-3" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                LOJISTA
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="container p-3">
                                        <div class="row">
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">Nome:</span></div>
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">Telefon 1:</span></div>
                                            <div class="w-100"></div>
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">Email:</span></div>
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">Telefone 2:</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion m-3" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    DADOS DA LOJA
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                    <div class="container p-3">
                                        <div class="row">
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">CNPJ:</span></div>
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">E-mail:</span></div>
                                            <div class="w-100"></div>
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">Nome Fantasia:</span></div>
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">Telefone:</span></div>
                                            <div class="col-6 p-1 col-sm-6"><span class="fw-bold">Razão Social:</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
