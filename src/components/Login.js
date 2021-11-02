import { useLocation } from 'react-router';
import useAuth from '../auth/useAuth';
import './styles/Login.css'

const userCredentials = {};

export default function Login() {

    const location = useLocation;
    const { login } = useAuth();

    return (
            <div>
                <form action="idex.html" class="login-form">
                    
                    <img src="/img/logo/logotrans.png" alt=""/>

                    <div class="txtb">
                        <input type="text"/>
                        <span data-placeholder="Usuario"></span>
                    </div>

                    <div class="txtb">
                        <input type="password"/>
                        <span data-placeholder="Contraseña"></span>
                    </div>

                    <input type="submit" class="logbtn" value="Entrar" onClick={() => login(userCredentials, location.state?.form)}/>

                    <div class="button-text">
                        No estas registrado?, registrate haciendo <a href="registrar.html">Click aqui</a>
                    </div>

                </form>
            </div>
                
  
    )
}
