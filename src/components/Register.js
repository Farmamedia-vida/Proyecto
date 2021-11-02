import useAuth from '../auth/useAuth';
import './styles/Login.css'

const UserCredentials = {};

export default function Register() {
    

    return (

        <form action="idex.html" class="login-form">
        
       
        <h1>Registro</h1>

        <div class="txtb">
            <input type="text"/>
            <span data-placeholder="Nombre"></span>
        </div>
        <div class="txtb">
            <input type="text"/>
            <span data-placeholder="Apellido"></span>
        </div>
        <div class="txtb">
            <input type="email"/>
            <span data-placeholder="Correo"></span>
        </div>

        <div class="txtb">
            <input type="password"/>
            <span data-placeholder="Contraseña"></span>
        </div>

        <input type="submit" class="regisbtn" value="Registar"/>

        <div class="button-text">
           <a href="index.html">¿Ya tengo una cuenta?</a>
        </div>





    </form>
    )
}
