import React, { Component } from "react";
import CardSeries from "../CardSeries/CardSeries";
class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSeries: [],
            datos: [],
            datosCopia: [],
            page: 1,
            valor: ""

        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=0185f70c5f71076c61606afd4f75803b&page=1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dataSeries: data.results,
                    datos: data.results,
                    datosCopia: data.results
                })

            })
            .catch(error => console.log(error));
    }

    // Asi es la logistica de cargar mas, hay que poner pagina + 1
    cargarMas() {
        let otraPag = this.state.page + 1
        fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=0185f70c5f71076c61606afd4f75803b&page=${otraPag}`)
            .then(response => response.json())
            .then(data => {
                console.log('revisando mas', data)

                this.setState({
                    dataSeries: this.state.dataSeries.concat(data.results),
                    datos: this.state.dataSeries.concat(data.results),
                    datosCopia: this.state.dataSeries.concat(data.results),
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
        let datosFiltrados = this.state.datosCopia.filter((pj) => pj.name.toLowerCase().includes(this.state.valor.toLowerCase()))

        this.setState({
            datos: datosFiltrados,
        })

    }

    render() {
        console.log(this.state.dataSeries);
        return (
            <div>

                {this.state.dataSeries.length === 0 ? <p>Cargando...</p> :


                    <div className="divEnCartel">
                        <div id="formMovie" className="formMovie">
                        <form id="formId" className="barra_busqueda"  onSubmit={(event) => this.evitarSubmit(event)}>
                            <input placeholder="Encuentra tu serie favorita"type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} className="busqueda" />
                            <label  className="labelMovie">Buscar</label>
                        </form>
                        </div>

                        {this.state.datos.map((pelicula, idx) => (
                            <CardSeries key={idx + 1}
                                img={pelicula.poster_path}
                                title={pelicula.name}
                                id={pelicula.id}
                                overview={pelicula.overview} />

                        ))}
                        <button onClick={() => this.cargarMas()}>Cargar mas</button>

                    </div>
                }
            </div>
        )
    }
}


export default Series;