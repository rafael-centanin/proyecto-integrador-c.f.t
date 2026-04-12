import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CardPeli/CardPeli.css";
class CardPeli extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            hide: true,
            favoritos: false
        }
    }
    componentDidMount() {
        let clave = localStorage.getItem("favoritosPeliculas");

        if (clave !== null) {
            let storage = JSON.parse(clave)
            let incluye = storage.includes(this.props.id);
            this.setState({
                favoritos: incluye
            })
        }
    }
    show() {
        this.setState({
            show: true,
        })
    }

    hide() {
        this.setState({
            show: false,
        })
    }
    agregarFav(id) {
        let storage = localStorage.getItem("favoritosPeliculas");
        if (storage !== null) {
            let favoritosrecuperados = JSON.parse(storage);

            favoritosrecuperados.push(id);

            let storageString = JSON.stringify(favoritosrecuperados);
            localStorage.setItem("favoritosPeliculas", storageString)
        } else {
            let variable = [id];
            let storageString = JSON.stringify(variable);
            localStorage.setItem("favoritosPeliculas", storageString)
        }
        this.setState({
            favoritos: true,
        })

    }
    sacarFav(id) {
        let clave = localStorage.getItem("favoritosPeliculas")
        let storage = JSON.parse(clave)
        let storageFiltrado = storage.filter((elemento) => elemento !== id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritosPeliculas", storageString)
        this.setState({
            favoritos: false,
        })

    }

    render() {
        return (


            <article className="peliculaMasPopular">
                <img className="imagenpeliculaMasPop"
                    src={`https://image.tmdb.org/t/p/w342/${this.props.img}.jpg`}
                    alt={this.props.title}
                />
                <Link to=""><h2 className="titulopelicula2" >{this.props.title} </h2></Link>
                {this.state.show === true ? <p>{this.props.overview}</p> : null}
                {this.state.show === true ? <button className='more' onClick={() => this.hide()}>Ver Menos</button> :
                    <button className='more' onClick={() => this.show()}> Ver Descripcion</button>}
                <Link to={`/Detalle/movie/${this.props.id}`} className='botonDetalle'>
                    Detalle
                </Link>

                {this.state.favoritos === true ? <button onClick={() => this.sacarFav(this.props.id)}>Sacar de favoritos</button> : <button onClick={() => this.agregarFav(this.props.id)}>Agregar a favoritos</button>}
            </article>
        )
    }
}

export default CardPeli;