import { FaArrowRight } from 'react-icons/fa'
import api from "../../api/api";
import { useState } from "react";
import NavBar from "../layouts/NavBar";
import style from '../home/HomeComponent.module.css'
import CollapseLojista from "./collapse/collapseLojista";
import CollapseEmpresa from "./collapse/collapseEmpresa";
import ConteudoHome from "./conteudo/conteudoHome";

export default function HomeComponent(){

    const [cnpj, setCnpj] = useState()
    const [empresa, setEmpresa] = useState([]); 

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
                            <div class="input-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control w-75" name="cnpj" onChange={(e) => setCnpj(e.target.value)} placeholder="Digite um CNPJ"></input>
                                    <button class="btn btn-secondary d-sm-block d-md-none m-2"><FaArrowRight/></button>
                                    <button class="btn btn-danger d-none d-md-block d-lg-block m-2">Buscar Loja</button>
                                </div>
                            </div>     
                        </form>   
                    </div>
                    <ConteudoHome></ConteudoHome>
                </div>
                <CollapseLojista empresa={empresa}></CollapseLojista>
                <CollapseEmpresa empresa={empresa}></CollapseEmpresa>
            </div>
        </div>
    )
}
