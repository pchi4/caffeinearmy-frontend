import { useState } from 'react';
import { login } from '../../services/auth';
import api from '../../api/api';
import ModalCadastroUser from '../home/modal/ModalCadastroUser';
import styles from '../login/LoginStyle.module.css';
import ImagemComponent from './ImagemComponent';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function LoginComponent (){

    let history = useHistory();

    const MySwal = withReactContent(Swal)

    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    async function Login(e) {
        e.preventDefault();
        if(username === '' || password === ''){
            MySwal.fire({
                title: "Ops",
                text: "Credenciais erradas",
                icon:'error',
                confirmButtonText:'Ok'
            })
        }else{
            
            try {
                const response = await api.post('/usuario/login',{username,password});
                login(response.data.token);
                history.push('/home')

            } catch(err){
                console.log(err)
            }
        }
        
    }

    return(
        <div className={styles.containerLogin}>
            <div>
                <ImagemComponent  className={styles.imageLogin}/>
            </div>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <img src='/marca_lojistas.svg' alt='marca lojistas' className={styles.svgLogin}></img> <br></br>
                    <span className='d-none d-sm-block'><strong>Acesse com seu email e senha abaixo</strong></span>
                </div>
                <form className='m-4' onSubmit={Login}>
                    <div className='mb-4'>
                        <label className='form-label'>Seu e-mail</label>
                        <input type='email' 
                        className='form-control' 
                        id='exampleFormControlInput1' 
                        placeholder='Seu email'
                        onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div className='mb-4'>
                        <label for="exampleFormControlInput1" className='form-label'>Senha</label>
                        <input className='form-control'
                            id="exampleFormControlInput1"
                            type="password"
                            placeholder='Sua senha'
                            onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div className='d-grid gap-2 mt-4'>
                        <button class='btn' className={styles.pink} type='submit'>Entrar</button>
                    </div>
                </form>
                <div class="m-4">
                    <p className='text-center'>Caso você não tenha acesso ao sistema, preciso que cadastre-se</p>
                    <ModalCadastroUser />
                </div>
                <div className={styles.textFooter}>
                    <span className='d-none d-sm-block fw-lighter text-center fs-6 p-2'> © 2021 Caffeine Army. CNPJ: 27.403.527/0001-13</span>
                    <span className='d-none d-sm-block fw-lighter text-center fs-6 p-2'>Endereço: Rua Rubens Guelli, 68, Itaigara, Salvador - BA, 41815-135</span>
                    <span className='d-none d-sm-block fw-lighter text-center fs-6 p-2'>E-mail: <a href="/#">contato@caffeinearmy.com.br</a> | Telefone: <a href="/#"> +55 11 91106-4910</a>.</span>
                </div>
            </div>
        </div>
    )
}
