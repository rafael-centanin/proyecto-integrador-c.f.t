import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='ContainerHeader'>
                <div id="contenedordetituloeimagen">
                <img id="logo" src="./images/logo.png" alt="Logo" />
                <h1 id="titulo">Lumière Rouge</h1>
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
                            <Link className="nav-link" to="/favorites">Favoritas</Link>
                        </li>
                        <li className="nav-item ml-auto">
                            <Link className="nav-link" to="/register">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default Header