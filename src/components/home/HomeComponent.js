
import NavBar from "../layouts/NavBar";
import style from '../home/HomeComponent.module.css'
import { FaArrowRight } from 'react-icons/fa'
import api from "../../api/api";
import { useState } from "react";

export default function HomeComponent(){

    const [cnpj, setCnpj] = useState()
    const [empresa, setEmpresa] = useState(); 
    console.log(empresa)

    function formSubmit (event){
        event.preventDefault();
        api.get(`/empresa/${cnpj}`)
        .then(res => setEmpresa(res.data))
        .catch((error)=> console.log(error)) 
    }

    return(
        <div>
            <NavBar></NavBar>
            <div class="text-danger border-bottom border-muted"></div>
            <div class="d-sm" className={style.background}>
                <div className={style.content}>
                    <div class="d-flex justify-content-evenly align-items-center">
                        <form class="form-control"  onSubmit={formSubmit}>
                            <div class="mb-3 p-3">
                                <input type="text" class="form-control w-75" name="cnpj" onChange={(e) => setCnpj(e.target.value)} placeholder="Digite um CNPJ"></input>
                                <button class="btn btn-danger d-none d-sm-block m-2"><FaArrowRight/></button>
                                <button class="ml-3 btn btn-danger d-none d-sm-block m-2" type="submit">Buscar Loja</button>
                            </div>        
                        </form>   
                    </div>
                    <div class="h4 pb-2 mb-4 text-danger border-bottom border-muted"></div>
                    <div class="m-3 p-1 text-center">
                        <h4 class="fw-bold"><img src="/icone_loja_roxo.svg" alt="icone roxo da loja" class="rounded-circle p-2 bg-info"></img> LOJA DE SUPLEMENTOS <span class="text-muted d-none d-sm-inline m-2">- LOJA DE SUPLEMENTOS LTDA.</span></h4>
                    </div>
                    <div class="m-3 text-center"> 
                        <p class="fw-bold">INFORMAÇÕES ADICIONAIS</p>
                    </div>
                    <div class="card p-3 m-3">
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div class="m-5 text-center fw-bold">
                        <p class="fw-bold">DADOS CADASTRAIS</p>
                    </div>
                </div>
                <div class="accordion m-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        LOJISTA
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body" className={style.acordionBodyMb}>
                            <div class="container p-3">
                                <div class="row">
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">Nome: </span></div>
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">Telefon1: </span></div>
                                    <div class="w-100"></div>
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">Email: </span></div>
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">Telefone2: </span></div>
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
                    <div class="accordion-body" className={style.acordionBodyMb}>
                            <div class="container p-3">
                                <div class="row">
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">CNPJ: </span></div>
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">E-mail:  </span></div>
                                    <div class="w-100"></div>
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">Nome Fantasia:</span></div>
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">Telefone: </span></div>
                                    <div class="col-12 col-md-6 p-1 "><span class="fw-bold">Razão Social: </span></div>
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
