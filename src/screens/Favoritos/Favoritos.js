import React, { Component } from 'react';
import CardPeli from '../../componentes/CardPeli/CardPeli';
import CardSeries from '../../componentes/CardSeries/CardSeries';
class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFav: [],
            dataSeries: []

        }
    }

    componentDidMount() {
        this.seriesFav()
        let storage = localStorage.getItem("favoritosPeliculas");
        if (storage !== null) {
            let favoritos = JSON.parse(storage);
            let peliculasRecuperadas = [];
            favoritos.map((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0185f70c5f71076c61606afd4f75803b`)
                    .then(res => res.json())
                    .then(data => {
                        peliculasRecuperadas.push(data);

                        this.setState({
                            peliculasFav: peliculasRecuperadas,
                        })
                    })
                    .catch(error => console.log(error));

            })

        }

    }
    seriesFav(){
                let storage = localStorage.getItem("favoritosSeries");
        if (storage !== null) {
            let favoritos = JSON.parse(storage);
            let peliculasRecuperadas = [];
            favoritos.map((id) => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=0185f70c5f71076c61606afd4f75803b`)
                    .then(res => res.json())
                    .then(data => {
                        peliculasRecuperadas.push(data);

                        this.setState({
                            dataSeries: peliculasRecuperadas,
                        })
                    })
                    .catch(error => console.log(error));

            })

        }
    }

    render() {
        return (
            <main>
                <section>
                    <h2> Películas Favoritas</h2>
                    {this.state.peliculasFav.length === 0 ? <p>No tenés peliculas favoritas</p> :
                        <div className="divEnCartel">

                            {this.state.peliculasFav.map((pelicula, idx) => (
                                <CardPeli key={idx + 1}
                                    img={pelicula.poster_path}
                                    title={pelicula.title}
                                    id={pelicula.id}
                                    overview={pelicula.overview} />
                            ))}
                        </div>}


                </section>
                <section>
                    <h2> Series Favoritas</h2>
                            
                 {this.state.dataSeries.length===0 ? <p>No tenés series favoritas</p>: 
                    
                    
                    <div className="divEnCartel">
                    
                        {this.state.dataSeries.map((pelicula, idx) => (
                            <CardSeries key={idx + 1}
                            img={pelicula.poster_path}
                            title={pelicula.name}
                            id={pelicula.id}
                            overview={pelicula.overview} />
                            
                        ))}
                        <button>Cargar mas</button>

                    </div>}

                </section>
            </main>

        );
    }



}

export default Favoritos;