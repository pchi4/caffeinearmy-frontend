import './LoginStyle.css';
import ImagemComponent from './ImagemComponent';

function LoginComponent (){

    return(
        <div>
            <div>
                <ImagemComponent/>
            </div>
            <div>
                <div><img src="/marca_lojistas.svg" alt='marca lojistas'></img> <br></br>
                    <span className="d-none d-sm-block"><strong>Acesse com seu email e senha abaixo</strong></span>
                </div>
                <form className="m-4">
                    <div className="mb-3">
                        <label className="form-label">Seu e-mail</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Seu email"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input className="form-control" placeholder='Sua senha'></input>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">Entrar</button>
                    </div>
                </form>
                <div>
                    <p className="d-none d-sm-block fw-lighter fs-6 text-sm-start p-2">
                        © 2021 Caffeine Army. CNPJ: 27.403.527/0001-13 <br></br> Endereço: Rua Rubens Guelli, 68, Itaigara, Salvador - BA, 41815-135 <br></br> E-mail: contato@caffeinearmy.com.br | Telefone: +55 11 91106-4910
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent; 