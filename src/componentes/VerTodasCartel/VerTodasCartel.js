import { Component } from "react";
import Busqueda from "../../componentes/Busqueda/Busqueda";

import PelisCartel from "../../componentes/PelisCartel/PelisCartel";


class VerTodasCartel extends Component {
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
                
                <h2 id="h2Main"className="nav-link" >Películas en Cartel</h2>
                {this.state.enCartel.length === 0 ? <p>Cargando...</p> : <PelisCartel peliculas={this.state.enCartel} />}
                
            </main>
        );
    }
}

export default VerTodasCartel;