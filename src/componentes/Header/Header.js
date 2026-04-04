import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='ContainerHeader'>
                <div id="contenedordetituloeimagen">
                <Link id="logo" to="/"> <img id="logo" src="/images/logo.png" alt="Logo" /></Link>
                <h1 className="titulos"><Link id="titulo"to="/">Lumíere Rouge</Link></h1>
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
                            <Link className="nav-link" to="/register">Register

                            </Link>
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