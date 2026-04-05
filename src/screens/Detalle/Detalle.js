import React, { Component } from "react";
import './Detalle.css'

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: '',
            cargar: true
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0185f70c5f71076c61606afd4f75803b`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pelicula: data,
                    cargar: false
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        console.log(this.state.pelicula)
        if (this.state.cargar === true) {
            return (
                <p>Cargando...</p>
            )
        }
        else {
            return (
                <div id="divgeneralDetalle">
                <article id="articleDetalle" className="peliculaEnCartel">
                    <div>
                        <img id="imagenDetalle" className="imagenpelicula" src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}.jpg`} alt={this.state.pelicula.title} />
                    </div>
                    <div>
                        <h2 id="tituloDetalle" className="titulopelicula" > {this.state.pelicula.title} </h2>
                        <div id="informacionDetalle">
                        <p className="datoDetalle"><strong>Rating:</strong> {this.state.pelicula.vote_average}/10</p>
                        <p className="datoDetalle"><strong>Fecha de estreno: </strong> {this.state.pelicula.release_date}</p>
                        <p className="datoDetalle"><strong>Duracion:</strong> {this.state.pelicula.runtime} minutos</p>
                        </div>
                        <p className="informacionDetalle">{this.state.pelicula.overview}</p>
                        <div className="mapeoDetalle">
                        {this.state.pelicula.genres.map((genero, idx) =>
                            <p id="pMapeadaDetalle"className="datoDetalle" key={genero + idx}>{genero.name}</p>)}
                        </div>
                        <button className='fav' onClick={() => this.props.favoritos()}> Agregar a favoritos</button>
                    </div>
                </article>
                </div>
            )
        }
    }
}



export default Detalle;