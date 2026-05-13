import React, { useState} from "react";
import "./Login.css"
import Cookies from 'universal-cookie'
import { withRouter } from 'react-router-dom'
let cookies = new Cookies()

function Login(props) {
    const [valor, setValor] = useState("")
    const [valor2, setValor2] = useState("")
    const [error, setError] = useState("")

    function evitarSubmit(event) {
        event.preventDefault();
        mandarSubmit();

    }
    function controlarCambios(event) {
        setValor( event.target.value)
    }
    function controlarCambios2(event) {
        setValor2 (event.target.value)
    }
    function mandarSubmit() {
        let mail = valor
        let contraseña = valor2

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

        let usuarioValido = usuarios.filter((user) => user.mail === mail);

        if (usuarioValido.length > 0 && usuarioValido[0].password === contraseña) {
            cookies.set("user-auth-cookie", mail)
            props.history.push("/")
        } else {
            setError( "Credenciales incorrectas")

            console.log(localStorage)
        }}

            return (
                <div className="bodyregister">
                    <form className='formregister' onSubmit={(event) => evitarSubmit(event)}>
                        <h1 id="titulo">¡Bienvenido de vuelta!</h1>
                        <h2 id="h2register" className='nav-link'>Ingresar a tu cuenta</h2>
                        <h3 className='h3register'>Ingrese su mail</h3>
                        <input className='inputregister' required type="email" placeholder="Agregue su mail   " onChange={(event) => controlarCambios(event)} value={valor} />
                        <h3 className='h3register'>Ingrese su contraseña</h3>
                        <input className='inputregister' required type="password" placeholder="Agregue su contraseña" onChange={(event) => controlarCambios2(event)} value={valor2} />
                        <p className='errores'>{error}</p>
                        <button type="submit">Login</button>
                    </form>
                </div>
            )
        }


export default withRouter(Login);