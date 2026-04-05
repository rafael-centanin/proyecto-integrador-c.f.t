
import "./PelisCartel.css"
import { Link } from "react-router-dom";
import React, { Component } from "react";


class PelisCartel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            hide: true

        }
    }

    show() {
        this.setState({
            show:  true
        })
    }

    hide() {
        this.setState({
            show:  false,
        })
    }
    favoritos(){
        
    }

    render() {
        return (

            <div className="divEnCartel">
                {this.props.peliculas.map((pelicula) => (
                    <article className="peliculaEnCartel">
                        <img className="imagenpelicula" src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}.jpg`} alt={pelicula.title} />
                        <Link to={`/Detalle/${pelicula.id}`}><h2 className="titulopelicula" > {pelicula.title} </h2> </Link>

                        {this.state.show === true ? <p>{pelicula.overview}</p> : null}
                        {this.state.show === true ? <button className='more' onClick={() => this.hide()}>Ver Menos</button> :
                            <button className='more' onClick={() => this.show()}>Ver Descripcion</button>}


                        <Link to={`/Detalle/${pelicula.id}`} className='botonDetalle'>
                            Detalle
                        </Link>
                        <button className='fav' onClick={() => this.props.favoritos()}>Favoritos</button>
                    </article>
                ))}
            </div>
        )
    }
}
export default PelisCartel;