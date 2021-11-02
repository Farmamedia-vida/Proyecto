import Styles from '../styles/estilos.css';

export default function Login() {
    return (
            
                <form action="idex.html" class="login-form">
                    
                    <img src="Logo/logotrans.png" alt=""/>

                    <div class="txtb">
                        <input type="text"/>
                        <span data-placeholder="Usuario"></span>
                    </div>

                    <div class="txtb">
                        <input type="password"/>
                        <span data-placeholder="Contraseña"></span>
                    </div>

                    <input type="submit" class="logbtn" value="Entrar"/>

                    <div class="button-text">
                        No estas registrado?, registrate haciendo <a href="registrar.html">Click aqui</a>
                    </div>

                </form>
  
    )
}
