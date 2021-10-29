import Styles from '../styles/estilos.css';

export default function Login() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="estilos.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" charset="utf-8"></script>
                <link rel="icon" type="image/jpg" href="Logo/logopeque.png"/>
                <title>Login</title>
            </head>
            <body>

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
            </body>
        </html>
    )
}
