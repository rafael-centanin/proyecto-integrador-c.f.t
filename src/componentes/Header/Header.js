import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='ContainerHeader'>
                <div id="contenedordetituloeimagen">
                <img id="logo" src="./images/logo.png" alt="Logo" />
                <h1 id="titulo">Lumíere Rouge</h1>
                </div>
                <nav>
                    <ul className="Nav-ul">
                        <li className="nav-item">
                            <a id="home" className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="movies.html">Películas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="series.html">Series</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="favorites.html">Favoritas</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="register.html">Registro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login.html">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default Header