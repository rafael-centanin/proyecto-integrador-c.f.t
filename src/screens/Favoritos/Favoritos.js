import React, { useState, useEffect } from 'react';
import CardPeli from '../../componentes/CardPeli/CardPeli';
import CardSeries from '../../componentes/CardSeries/CardSeries';
function Favoritos(props) {
    const [peliculasFav, setPeliculasFav] = useState([])
    const [dataSeries, setDataSeries] = useState([])

    useEffect(() => {
        seriesFav()
        let storage = localStorage.getItem("favoritosPeliculas");
        if (storage !== null) {
            let favoritos = JSON.parse(storage);
            let peliculasRecuperadas = [];
            favoritos.map((id) => {
                return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0185f70c5f71076c61606afd4f75803b`)
                    .then(res => res.json())
                    .then(data => {
                        peliculasRecuperadas.push(data);
                        setPeliculasFav(peliculasRecuperadas)
                    })
                    .catch(error => console.log(error));
            })
}}, [])

        function seriesFav() {
            let storage = localStorage.getItem("favoritosSeries");
            if (storage !== null) {
                let favoritos = JSON.parse(storage);
                let peliculasRecuperadas = [];
                favoritos.map((id) => {
                    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=0185f70c5f71076c61606afd4f75803b`)
                        .then(res => res.json())
                        .then(data => {
                            peliculasRecuperadas.push(data);
                                setDataSeries(peliculasRecuperadas)
                        })
                        .catch(error => console.log(error));

                })

            }
        }
            console.log(localStorage)
            return (
                <div className="fondoMovie">
                    <main className="mainHome">
                        <section>
                            <h2 id="h2Main" className="nav-link"> Películas Favoritas</h2>
                            {peliculasFav.length === 0 ? <p className="PFavoritos" id="copy">No tenés peliculas favoritas</p> :
                                <div className="divEnCartel">
                                    {peliculasFav.map((pelicula, idx) => (
                                        <CardPeli key={idx + 1}
                                            img={pelicula.poster_path}
                                            title={pelicula.title}
                                            id={pelicula.id}
                                            overview={pelicula.overview}
                                            type="movie" />
                                    ))}
                                </div>}
                        </section>
                        <section>
                            <h2 id="h2Main" className="nav-link"> Series Favoritas</h2>
                            {dataSeries.length === 0 ? <p className="PFavoritos" id="copy">No tenés series favoritas</p> :
                                <div className="divEnCartel">
                                    {dataSeries.map((pelicula, idx) => (
                                        <CardSeries key={idx + 1}
                                            img={pelicula.poster_path}
                                            title={pelicula.name}
                                            id={pelicula.id}
                                            overview={pelicula.overview}
                                            type="tv" />
                                    ))}
                                </div>}
                        </section>
                    </main>
                </div>
            );
        }

export default Favoritos;