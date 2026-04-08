import React, { Component } from "react";
import CardPeli from "../CardPeli/CardPeli";
class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPeliculas: []
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dataPeliculas: data.results
                })

            })
            .catch(error => console.log(error));
    }


    render() {
        console.log(this.state.dataPeliculas);
        return (
            <div>

                 {this.state.dataPeliculas.length===0 ? <p>Cargando...</p>: 
                    
                    
                    <div className="divEnCartel">
                    
                        {this.state.dataPeliculas.map((pelicula, idx) => (
                            <CardPeli key={idx + 1}
                            img={pelicula.poster_path}
                            title={pelicula.title}
                            id={pelicula.id}
                            overview={pelicula.overview} />
                        ))}

                    </div>
                  }   
                  </div>
        )}}


export default Movies;