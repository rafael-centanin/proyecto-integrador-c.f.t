import React, { Component } from "react";
import './Detalle.css'

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: '',
            cargar: true,
            favoritos: false,
            ids: Number(this.props.match.params.id)
        }
    }
    componentDidMount() {
        let clave = localStorage.getItem('favoritosPeliculas');
        if (clave !== null) {
            let storage = JSON.parse(clave)
            let incluye = storage.includes(this.props.match.params.id);
            this.setState({
                favoritos: incluye
            })
        }
        let id = this.props.match.params.id
        let type = this.props.match.params.type;
        fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=0185f70c5f71076c61606afd4f75803b`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pelicula: data,
                    cargar: false
                })
            })
            .catch(error => console.log(error))
    }
    agregarFav(ids) {
        let storage = localStorage.getItem("favoritosPeliculas");
        let storageSeries = localStorage.getItem("favoritosSeries");
        let type = this.props.match.params.type;


        if (type === 'tv') {
            if (storageSeries !== null) {
                let favoritosrecuperados = JSON.parse(storageSeries);

                favoritosrecuperados.push(ids);

                let storageString = JSON.stringify(favoritosrecuperados);
                localStorage.setItem("favoritosSeries", storageString)
            } else {
                let variable = [ids];
                let storageString = JSON.stringify(variable);
                localStorage.setItem("favoritosSeries", storageString)
            }
            this.setState({
                favoritos: true,
            })
        } else {
            if (storage !== null) {
                let favoritosrecuperados = JSON.parse(storage);

                favoritosrecuperados.push(ids);

                let storageString = JSON.stringify(favoritosrecuperados);
                localStorage.setItem("favoritosPeliculas", storageString)
            } else {
                let variable = [ids];
                let storageString = JSON.stringify(variable);
                localStorage.setItem("favoritosPeliculas", storageString)
            }
            this.setState({
                favoritos: true,
            })
        }


    }
    sacarFav(ids) {
        let clave = localStorage.getItem("favoritosPeliculas")
        let storage = JSON.parse(clave)
        let storageFiltrado = storage.filter((elemento) => elemento !== ids)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritosPeliculas", storageString)
        this.setState({
            favoritos: false,
        })

    }

    render() {

        console.log(this.state.pelicula)
        if (this.state.cargar === true) {
            return (
                <p>Cargando...</p>
            )
        }
        else {
            let titulo = this.state.pelicula.title || this.state.pelicula.name
            let fechas = this.state.pelicula.release_date || this.state.pelicula.first_air_date
            let duracion = this.props.match.params.type === 'movie' ? this.state.pelicula.runtime : null;
            return (
                <div id="divgeneralDetalle">
                    <article id="articleDetalle" className="peliculaEnCartel">
                        <div>
                            <img id="imagenDetalle" className="imagenpelicula" src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}.jpg`} alt={titulo} />
                        </div>
                        <div>
                            <h2 id="tituloDetalle" className="titulopelicula" > {titulo} </h2>
                            <div className="informacionDetalle">
                                <p className="datoDetalle"><strong>Rating:</strong> {this.state.pelicula.vote_average}/10</p>
                                <p className="datoDetalle"><strong>Fecha de estreno: </strong> {fechas}</p>
                                {duracion && <p className="datoDetalle"><strong>Duracion:</strong> {duracion} minutos</p>}
                            </div>
                            <p className="informacionDetalle">{this.state.pelicula.overview}</p>
                            <div className="mapeoDetalle">
                                {this.state.pelicula.genres.map((genero, idx) =>
                                    <p id="pMapeadaDetalle" className="datoDetalle" key={genero + idx}>{genero.name}</p>)}
                            </div>
                            {/* <button className='fav' onClick={() => this.props.favoritos()}> Agregar a favoritos</button> */}
                            {this.state.favoritos === true ? <button onClick={() => this.sacarFav(this.state.ids)}>Sacar de favoritos</button> : <button onClick={() => this.agregarFav(this.state.ids)}>Agregar a favoritos</button>}
                        </div>
                    </article>
                </div>
            )
        }
    }
}
export default Detalle;