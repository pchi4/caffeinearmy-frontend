import { FaArrowRight } from 'react-icons/fa'
import styles from '../home/HomeStyle.module.css'

export default function FormBuscarLoja(props){
    return (
        <div className={styles.backMobile}>
             <div class='d-flex justify-content-evenly align-items-center'>
                <form className='w-100'  onSubmit={props.formSubmit}>
                    <div className='input-group p-3'>
                        <div className='input-group mb-3'>
                            <input 
                                type='text'
                                className='form-control w-75'
                                name='cnpj'
                                onChange={(e) => props.setCnpj(e.target.value)}
                                placeholder='Digite um CNPJ'
                            />
                            <button 
                            className='btn btn-secondary d-sm-block d-md-none m-2'
                            ><FaArrowRight/></button>
                            <button className='btn btn-danger d-none d-md-block d-lg-block m-2'>Buscar Loja</button>
                        </div>
                    </div>     
                </form>   
            </div>
        </div>
    )
}