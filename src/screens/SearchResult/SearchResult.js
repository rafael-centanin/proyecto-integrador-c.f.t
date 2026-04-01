import React, { Component } from "react";
import './SearchResults.css'
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],

        }
    }
    componentDidMount() {
        let id= this.props.match.params.valor;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0185f70c5f71076c61606afd4f75803b&query=${id}`)
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
                {this.state.resultados.length ===0?(<p>No hay resultados</p>): (this.state.resultados.map(pelicula =>
                    <article className="peliculaMasPopular" key={pelicula.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
                            alt={pelicula.title}
                        />
                        <p>{pelicula.title}</p>
                        <p>{pelicula.overview}</p>
                        <button> Ver Descripcion</button>
                        <button> Ir a detalle</button>
                    </article>))}
            </section>
        )
    };
}

export default SearchResult;