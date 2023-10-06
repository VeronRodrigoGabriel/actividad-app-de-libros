import { FormAddbook} from "./FormAddBook.jsx"
import { Listbooks } from "./Listbooks.jsx"
import { Opciones } from "./Opciones.jsx"
import {Link} from 'react-router-dom'
export const Main = ({ opciones,formAddbook,listbooks }) => {
    return (
        <main>
            {
                opciones ? <Opciones /> : null
            }  
            {
                formAddbook ? <FormAddbook/> : null
            } 
                
            {
                listbooks ? <Listbooks /> : null
            }
            
               
            
            
            <div>
               <Link to='/volver' className='btn btn-outline-danger'>Volver</Link>
            </div>
        </main>
    )
}