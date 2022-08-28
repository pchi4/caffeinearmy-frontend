import styles from '../login/LoginComponent.module.css';
import ImagemComponent from './ImagemComponent';

function LoginComponent (){

    return(
        <div className={styles.containerLogin}>
            <div>
                <ImagemComponent className={styles.imageLogin}/>
            </div>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <img src="/marca_lojistas.svg" alt='marca lojistas' className={styles.svgLogin}></img> <br></br>
                    <span class="d-none d-sm-block"><strong>Acesse com seu email e senha abaixo</strong></span>
                </div>
                <form class="m-4">
                    <div class="mb-3">
                        <label class="form-label">Seu e-mail</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Seu email"></input>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Senha</label>
                        <input class="form-control" placeholder='Sua senha'></input>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Entrar</button>
                    </div>
                </form>
                <div>
                    <p class="d-none d-sm-block fw-lighter fs-6 text-sm-start p-2">
                        © 2021 Caffeine Army. CNPJ: 27.403.527/0001-13 <br></br> Endereço: Rua Rubens Guelli, 68, Itaigara, Salvador - BA, 41815-135 <br></br> E-mail: contato@caffeinearmy.com.br | Telefone: +55 11 91106-4910
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent; 