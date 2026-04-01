import React, { Component } from 'react'
import "./Register.css"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            valor: '',
            valor2: ''
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
        let mailJSON = JSON.stringify(mail)
        let contraseñaJSON = JSON.stringify(contraseña)
        localStorage.setItem('mailRegister', mailJSON)
        localStorage.setItem('constraeeñaRegister', contraseñaJSON)
        localStorage.removeItem('Register')
        console.log(localStorage)
    }
    // Aca falte el tema del auth, las cookies y las validaciones
    render() {
        
        return (
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <h3>Ingrese su mail</h3>
                <input required type="email" placeholder="Agregue su mail" onChange={(event) => this.controlarCambios(event)} value={this.state.mail} />
                <h3>Ingrese su contraseña</h3>
                <input required type="text" placeholder="Agregue su contraseña" onChange={(event) => this.controlarCambios2(event)} value={this.state.contraseña} />
                <button type="submit">Registrase</button>
            </form>
        )
    }
}
export default Register