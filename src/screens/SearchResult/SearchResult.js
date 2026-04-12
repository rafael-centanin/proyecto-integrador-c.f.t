
import React, { Component } from "react";
import './SearchResults.css'
import CardPeli from "../../componentes/CardPeli/CardPeli";

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
        }
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
                {this.state.resultados.length === 0 ? (<p>No hay resultados</p>) : (this.state.resultados.map((pelicula, idx) =>
                    <CardPeli key={idx + 1}
                        img={pelicula.poster_path}
                        title={pelicula.title || pelicula.name}
                        id={pelicula.id}
                        overview={pelicula.overview}
                        type={this.props.match.params.select}
                    />
                ))}
            </section>
        )
    };
}

export default SearchResult;