import ModalCadastroUser from '../home/modal/ModalCadastroUser';
import styles from '../login/LoginStyle.module.css';
import ImagemComponent from './ImagemComponent';

function LoginComponent (){

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
                <form className='m-4'>
                    <div className='mb-4'>
                        <label className='form-label'>Seu e-mail</label>
                        <input type='email' className='form-control' id='exampleFormControlInput1' placeholder='Seu email'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Senha</label>
                        <input className='form-control' placeholder='Sua senha'></input>
                    </div>
                    <div className='d-grid gap-2 mt-4'>
                        <button class='btn' className={styles.pink} type='button'>Entrar</button>
                    </div>
                </form>
                <div class="m-4">
                    <p>Caso você não tenha acesso ao sistema, preciso que cadastre-se</p>
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

export default LoginComponent; 