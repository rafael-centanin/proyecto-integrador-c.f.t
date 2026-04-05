import {Link} from "react-router-dom";
import React, { Component } from "react";
import './SearchResults.css'
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            show: false,
            hide: true

        }
    }
    show() {
        this.setState({
            show: true
        })
    }

    hide() {
        this.setState({
            show: false,
        })
    }
    componentDidMount() {
        let valor = this.props.match.params.valor;
        let select = this.props.match.params.select;
        
        fetch(`https://api.themoviedb.org/3/search/${select}?api_key=0185f70c5f71076c61606afd4f75803b&query=${valor}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    resultados: data.results
                }
            ))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section className="sectionSearchResults">
                {this.state.resultados.length === 0 ? (<p>No hay resultados</p>) : (this.state.resultados.map(pelicula =>
                    <article className="peliculaEnCartel" key={pelicula.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
                            alt={pelicula.title}
                        />
                        <h2 className="titulopelicula">{pelicula.title}</h2>
                        <p>{pelicula.overview}</p>
                        {this.state.show === true ? <p>{pelicula.overview}</p> : null}
                        {this.state.show === true ? <button className='more' onClick={() => this.hide()}>Ver Menos</button> :
                            <button className='more' onClick={() => this.show()}>Ver Descripcion</button>}
                        <Link to={`/Detalle/${pelicula.id}`} className='botonDetalle'>
                            Detalle
                        </Link>

                    </article>))}
            </section>
        )
    };
}

export default SearchResult;