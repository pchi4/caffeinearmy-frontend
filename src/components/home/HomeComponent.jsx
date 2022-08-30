
import api from '../../api/api';
import React, { useState } from 'react';
import NavBar from '../layouts/NavBar';
import style from '../home/HomeStyle.module.css'
import CollapseLojista from './collapse/collapseLojista';
import CollapseEmpresa from './collapse/collapseEmpresa';
import ConteudoHome from './conteudo/conteudoHome';
import FormBuscarLoja from './FormBuscarLoja';

export default function HomeComponent(){

    const [cnpj, setCnpj] = useState()
    const [empresa, setEmpresa] = useState([]); 

    
    function formSubmit (event){
        event.preventDefault();

        const regexCnpj = cnpj.replace(/[^\d]+/g, "")
        
        api.get(`/empresa/${regexCnpj}`)
        .then(res =>{
            console.log(res.data) 
            setEmpresa(res.data)
        })
        .catch((error)=> console.log(error)) 
    }

    return(
        <div>
            <div className={style.mxNav}>
                <NavBar/>
            </div>
            <div className='text-danger border-bottom border-muted'></div>
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
