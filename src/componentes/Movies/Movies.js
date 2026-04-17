import React, { Component } from "react";
import CardPeli from "../CardPeli/CardPeli";
import './Movies.css'
class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPeliculas: [],
            datos: [],
            datosCopia: [],
            page: 1,
            valor: ""
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b&page=1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dataPeliculas: data.results,
                    datos: data.results,
                    datosCopia: data.results
                })

            })
            .catch(error => console.log(error));
    }
    cargarMas() {
        let otraPag = this.state.page + 1
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b&page=${otraPag}`)
            .then(response => response.json())
            .then(data => {
                console.log('revisando mas', data)

                this.setState({
                    dataPeliculas: this.state.dataPeliculas.concat(data.results),
                    datos: this.state.dataPeliculas.concat(data.results),
                    datosCopia: this.state.dataPeliculas.concat(data.results),
                    page: otraPag

                })
            }
            )
            .catch(error => console.log('El error fue: ' + error))
    }
    evitarSubmit(event) {
        event.preventDefault();

    }

    controlarCambios(event) {
        this.setState({ valor: event.target.value });


        this.filtrarPeliculas()
    }

    filtrarPeliculas() {
        let datosFiltrados = this.state.datosCopia.filter((pj) => pj.title.toLowerCase().includes(this.state.valor.toLowerCase()))

        this.setState({
            datos: datosFiltrados,
        })

    }

    render() {
        console.log(this.state.dataPeliculas);
        return (

            <div className="fondoMovie">

                {this.state.dataPeliculas.length === 0 ? <p>Cargando...</p> :
                    <div className="divEnCartel">
                        <div id="formMovie" className="formMovie">
                            <form id="formId" className="barra_busqueda" onSubmit={(event) => this.evitarSubmit(event)}>
                                <input placeholder="Encuentra tu pelicula favorita" type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} className="busqueda" id="busquedaid" />
                                <label className="labelMovie">Buscar</label>
                            </form>
                        </div>
                        {this.state.datos.map((pelicula, idx) => (
                            <CardPeli key={idx + 1}
                                img={pelicula.poster_path}
                                title={pelicula.title}
                                id={pelicula.id}
                                overview={pelicula.overview}
                                type="movie" />
                        ))}
                        <button onClick={() => this.cargarMas()}>Cargar mas</button>
                    </div>
                }
            </div>
        )
    }
}


export default Movies;