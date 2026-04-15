import React, { Component } from 'react'
import "./Login.css"
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
let cookies = new Cookies()

class Login extends Component {
    constructor() {
        super();
        this.state = {
            valor: '',
            valor2: '',
            error: '',
            arraymail: JSON.parse(localStorage.getItem('mails')) || []
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
        if (contraseña.length < 6) {
            this.setState({
                error: <p className='nombres'>La contraseña debe tener al menos 6 caracteres</p>
            })
            return
        }
        let mailJSON = JSON.stringify(mail)
        let contraseñaJSON = JSON.stringify(contraseña)
        let mailExiste = false

        this.state.arraymail.map((cadamail) => {
            if (mail === cadamail) {
                mailExiste = true
            }
        })

        if (mailExiste ) {
            this.setState({
                error: <p className='nombres'>Este mail ya esta en uso</p>
            })
        } else {
            let nuevoArray = this.state.arraymail.concat(mail)
            localStorage.setItem('mails', JSON.stringify(nuevoArray))
            localStorage.setItem('mailRegister', mailJSON)
            localStorage.setItem('contraseñaRegister', contraseñaJSON)
            this.setState({ error: '', arraymail: nuevoArray })
            let usuario = {user: mail, contraseña: contraseña}
            cookies.set("usuario", usuario)
            this.props.history.push("/Home")


        }

        console.log(localStorage)
    }
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
                    {this.state.error}
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);