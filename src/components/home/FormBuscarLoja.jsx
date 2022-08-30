import { FaArrowRight } from 'react-icons/fa'

export default function FormBuscarLoja(props){
    return (
        <div>

            
             <div className="d-flex justify-content-evenly align-items-center">
                <form className="form-control"  onSubmit={props.formSubmit}>
                    <div className="input-group">
                        <div className="input-group mb-3">
                            <input 
                                type="text"
                                className="form-control w-75"
                                name="cnpj"
                                onChange={(e) => props.setCnpj(e.target.value)}
                                placeholder="Digite um CNPJ"
                            />
                            <button 
                            className="btn btn-secondary d-sm-block d-md-none m-2"
                            ><FaArrowRight/></button>
                            <button className="btn btn-danger d-none d-md-block d-lg-block m-2">Buscar Loja</button>
                        </div>
                    </div>     
                </form>   
            </div>
        </div>
    )
}