import styles from "../home/HomeStyle.module.css";
import { logout } from '../../services/auth'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 
export default function NavBar(){

    let history = useHistory();
    const MySwal = withReactContent(Swal)

    function Logout(e){
         
        MySwal.fire({
            title: 'Deseja sair?',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Sair',
            showCancelButton: true,
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire({
                    title: 'Logout feito com sucesso.',
                    icon: 'success'
                })
                logout()
                setTimeout(()=>{
                    history.push('/')
                },2000)
            }   
        })
        
    }
    return(
        <nav class="navbar">
            <div class="container-fluid">
                <div className={styles.divW}>
                    <img src="/marca_lojistas.svg" alt="icone-marca" className={styles.marcaLoja}></img>
                </div>
                <ul class="nav nav-tabs ml-5 mr-5">
                    <li class="nav-item text-center p-1">
                        <a class="fw-bold text-center text-dark text-decoration-none list-group-item active"  aria-current="true" href="/home"><img class="nav-link" alt="icone" src="/icone_lojas.svg"></img></a>
                        <a class="fw-bold text-center text-dark d-none d-sm-block text-decoration-none" href="/home"><span id="lojas" className={styles.lojas}>Lojas</span></a>
                    </li>
                    <li class="nav-item text-center p-1">
                        <a class="fw-bold text-center text-dark text-decoration-none" onClick={Logout} href={() => false}><img class="nav-link" alt="icone" src="/icone_sair.svg"></img></a>
                        <a class="fw-bold  d-none d-sm-block text-dark text-decoration-none" onClick={Logout} href={() => false} ><span id="logout" className={styles.logout}>Sair</span></a>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}
