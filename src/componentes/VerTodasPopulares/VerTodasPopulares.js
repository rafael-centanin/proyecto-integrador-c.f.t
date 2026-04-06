import { Component } from "react";
import Busqueda from "../../componentes/Busqueda/Busqueda";
import MasPopulares from "../../componentes/MasPopulares/MasPopulares";

import { Link } from "react-router-dom";


class VerTodasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masPopulares: [],
            enCartel: []

        }
    }
    componentDidMount() {
        this.pelisEnCartel();
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    masPopulares: data.results
                })
            })
            .catch(error => console.log(error));
    }

    pelisEnCartel() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    enCartel: data.results
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <main className="mainHome">
                <Busqueda />
                <h2 id="h2Main"className="nav-link">Más Populares</h2>
                {this.state.masPopulares.length === 0 ? <p>Cargando...</p> : <MasPopulares peliculas={this.state.masPopulares} />}
                
            </main>
        );
    }
}

export default VerTodasPopulares;