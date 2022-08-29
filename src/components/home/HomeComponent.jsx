
import api from "../../api/api";
import { useState } from "react";
import NavBar from "../layouts/NavBar";
import style from '../home/HomeComponent.module.css'
import CollapseLojista from "./collapse/collapseLojista";
import CollapseEmpresa from "./collapse/collapseEmpresa";
import ConteudoHome from "./conteudo/conteudoHome";
import FormBuscarLoja from "./FormBuscarLoja";

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
                    <FormBuscarLoja formSubmit={formSubmit} setCnpj={setCnpj}/>              
                    <ConteudoHome />
                </div>
                <CollapseLojista empresa={empresa}/>
                <CollapseEmpresa empresa={empresa}/>
            </div>
        </div>
    )
}
