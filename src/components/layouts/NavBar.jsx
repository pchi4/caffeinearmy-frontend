import '../home/style.css';

function NavBar(){
    return(
        <nav className="navbar">
            <div className="container-fluid ml-4" >
                <div className="divW">
                    <img src="/marca_lojistas.svg" alt='icone-marca' className="marcaLoja"></img>
                </div>
                <ul className="nav nav-tabs ml-5 mr-5">
                    <li className="nav-item text-center p-1">
                        <a className="fw-bold text-center text-dark text-decoration-none" href='/#'><img className="nav-link" alt='icone' src="/icone_lojas.svg"></img></a>
                        <a className="fw-bold text-center text-dark d-none d-sm-block text-decoration-none" href="/#"><span id='lojas' className="lojas">Lojas</span></a>
                    </li>
                    <li className="nav-item text-center p-1">
                        <a className="fw-bold text-center text-dark text-decoration-none" href='/#'><img className="nav-link" alt='icone' src="/icone_sair.svg"></img></a>
                        <a className="fw-bold  d-none d-sm-block text-dark text-decoration-none" href="/#"><span id='logout' className="logout">Sair</span></a>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavBar; 