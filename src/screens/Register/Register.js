import React, { useState } from 'react'
import "./Register.css"
import Cookies from 'universal-cookie'
let cookies = new Cookies()

function Register(props) {
    const [valor, setValor] = useState("")
    const [valor2, setValor2] = useState("")
    const [error, setError] = useState("")
    const [arraymail, setArrayMail] = useState(JSON.parse(localStorage.getItem('mails')) || [])

    function evitarSubmit(event) {
        event.preventDefault();
        mandarSubmit();

    }
    function controlarCambios(event) {
        setValor(event.target.value)
    }

    function controlarCambios2(event) {
        setValor2(event.target.value)
    }

    function mandarSubmit() {
        let mail = valor
        let contraseña = valor2
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

        if (contraseña.length < 6) {
            setError(<p className='errores'>La contraseña debe tener al menos 6 caracteres</p>)
            return
        }

        let mailJSON = JSON.stringify(mail)
        let contraseñaJSON = JSON.stringify(contraseña)
        let mailExiste = false

        arraymail.map((cadamail) => {
            if (mail === cadamail) {
                mailExiste = true
            }
        })

        if (mailExiste) {
            setError(<p className='errores'>Este mail ya esta en uso</p>)
        } else {
            let nuevoArray = arraymail.concat(mail)
            localStorage.setItem('mails', JSON.stringify(nuevoArray))
            localStorage.setItem('mailRegister', mailJSON)
            localStorage.setItem('contraseñaRegister', contraseñaJSON)
            setError("")
            setArrayMail(nuevoArray)

            let usuarioNew = { mail: mail, password: contraseña }
            usuarios.push(usuarioNew);

            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            cookies.set("user-auth-cookie", mail);
            props.history.push("/")

        }
    }
    console.log(localStorage)
    return (
        <div className="bodyregister">
            <form className='formregister' onSubmit={(event) => evitarSubmit(event)}>
                <h1 id="titulo">¡Bienvenido a Lumíere Rouge!</h1>
                <h2 id="h2register" className='nav-link'>Crea una cuenta</h2>
                <h3 className='h3register'>Ingrese su mail</h3>
                <input className='inputregister' required type="email" placeholder="Agregue su mail   " onChange={(event) => controlarCambios(event)} value={valor} />
                <h3 className='h3register'>Ingrese su contraseña</h3>
                <input className='inputregister' required type="password" placeholder="Agregue su contraseña" onChange={(event) => controlarCambios2(event)} value={valor2} />
                {error}
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Register;