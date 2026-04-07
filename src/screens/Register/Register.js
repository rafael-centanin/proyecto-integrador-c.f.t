import React, { Component } from 'react'
import "./Register.css"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            valor: '',
            valor2: '',
            error: ''
        }
    }
    evitarSubmit(event) {
        event.preventDefault();
        this.mandarSubmit()
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
        localStorage.setItem('mailRegister', mailJSON)
        localStorage.setItem('constraeeñaRegister', contraseñaJSON)
        this.setState({
            error: ''
        })
        console.log(localStorage)
    }
    // Aca falte el tema del auth, las cookies y las validaciones
    render() {

        return (
            <div className="bodyregister">
            <form className='formregister' onSubmit={(event) => this.evitarSubmit(event)}>
                {/* lol, cada vez me confundo yo con mis propias etiquetas de clase y de id, haganme recordar que arregle eso */}
                <h1 id="titulo">¡Bienvenido a Lumíere Rouge!</h1>
                <h2 id="h2register" className='nav-link'>Crea una cuenta</h2>
                <h3 className='h3register'>Ingrese su mail</h3>
                <input  className='inputregister'required type="email" placeholder="Agregue su mail   " onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                <h3 className='h3register'>Ingrese su contraseña</h3>
                <input className='inputregister' required type="password" placeholder="Agregue su contraseña" onChange={(event) => this.controlarCambios2(event)} value={this.state.valor2} />
                {this.state.error}
                <button type="submit">Registrarse</button>
            </form>
            </div>
        )
    }
}
export default Register;