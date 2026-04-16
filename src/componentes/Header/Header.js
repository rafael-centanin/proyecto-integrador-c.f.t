import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie'
import './Header.css'

let cookies = new Cookies()

class Header extends Component {

    logout(){
        cookies.remove("user-auth-cookies")
        this.props.history.push("/login")
    }
    
    render() {
        let usuario= cookies.get("user-auth-cookies")
        return (
            <div className='ContainerHeader'>
                <div id="contenedordetituloeimagen">
                    <Link id="logo" to="/"> <img id="logo" src="/images/logo.png" alt="Logo" /></Link>
                    <h1 className="titulos"><Link id="titulo" to="/">Lumíere Rouge</Link></h1>
                </div>
                <nav>
                    <ul className="Nav-ul">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Películas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/series">Series</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favoritos">Favoritas</Link>
                        </li>
                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="/register">Register

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        {usuario != null ?   <h2> No estas logueado</h2>:
                        <button onClick={() => this.logout()}>
                            Logout
                        </button> }
                    
                    </ul>
                </nav>
            </div>

        )
    }
}

export default withRouter (Header)