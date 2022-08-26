import style from '../home/HomeComponent.module.css';

function NavBar(){
    return(
        <nav class="navbar" className={style.flexWrap}>
            <div class="container-fluid ml-4" >
                <div className={style.divW}>
                    <img src="/marca_lojistas.svg" alt='icone-marca' className={style.marcaLoja}></img>
                </div>
                <ul class="nav nav-tabs ml-5 mr-5" className={style.flexWrap}>
                    <li class="nav-item text-center p-1">
                        <a class="fw-bold text-center text-dark text-decoration-none" href='/#'><img class="nav-link" alt='icone' src="/icone_lojas.svg"></img></a>
                        <a class="fw-bold text-center text-dark d-none d-sm-block text-decoration-none" href="/#"><span id='lojas' className={style.lojas}>Lojas</span></a>
                    </li>
                    <li class="nav-item text-center p-1">
                        <a class="fw-bold text-center text-dark text-decoration-none" href='/#'><img class="nav-link" alt='icone' src="/icone_sair.svg"></img></a>
                        <a class="fw-bold  d-none d-sm-block text-dark text-decoration-none" href="/#"><span id='logout' className={style.logout}>Sair</span></a>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavBar; 