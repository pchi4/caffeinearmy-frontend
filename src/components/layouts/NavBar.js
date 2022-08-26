import style from '../home/HomeComponent.module.css';

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div>
                    <img src="/marca_lojistas.svg"></img>
                </div>
                <ul class="nav nav-tabs">
                    <li class="nav-item text-center">
                        <a class="fw-bold text-center" href="/#"><img class="nav-link" src="/icone_lojas.svg"></img> Lojas</a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="fw-bold" href="/#"><img class="nav-link" src="/icone_sair.svg"></img> Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar; 