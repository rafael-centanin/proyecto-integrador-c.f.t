import React, { Component } from 'react'
import "./Login.css"
import Cookies from 'universal-cookie'
import { withRouter } from 'react-router-dom'
let cookies = new Cookies()

class Login extends Component {
    constructor() {
        super();
        this.state = {
            valor: "",
            valor2:"",
            error: "",

        }
    }
    evitarSubmit(event) {
        event.preventDefault();
        this.mandarSubmit();

    }
    controlarCambios(event) {
        this.setState({
            valor: event.target.value
        })
    }
    controlarCambios2(event) {
        this.setState({
            valor2: event.target.value
        })
    }
    mandarSubmit() {
        let mail = this.state.valor
        let contraseña = this.state.valor2

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

        let usuarioValido = usuarios.filter((user) => user.mail === mail);

        if (usuarioValido.length > 0 && usuarioValido[0].password === contraseña) {
            cookies.set("user-auth-cookie", mail)
            this.props.history.push("/")
        } else {
            this.setState({
                error: "Credenciales incorrectas"
            })

            console.log(localStorage)
        }}

        render() {
            return (
                <div className="bodyregister">
                    <form className='formregister' onSubmit={(event) => this.evitarSubmit(event)}>
                        <h1 id="titulo">¡Bienvenido de vuelta!</h1>
                        <h2 id="h2register" className='nav-link'>Ingresar a tu cuenta</h2>
                        <h3 className='h3register'>Ingrese su mail</h3>
                        <input className='inputregister' required type="email" placeholder="Agregue su mail   " onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                        <h3 className='h3register'>Ingrese su contraseña</h3>
                        <input className='inputregister' required type="password" placeholder="Agregue su contraseña" onChange={(event) => this.controlarCambios2(event)} value={this.state.valor2} />
                        <p className='errores'>{this.state.error}</p>
                        <button type="submit">Login</button>
                    </form>
                </div>
            )
        }
    }

export default withRouter(Login);