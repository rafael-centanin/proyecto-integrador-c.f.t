
import React, { Component } from "react";
import { useState, useEffect } from "react";
import './SearchResults.css'
import CardPeli from "../../componentes/CardPeli/CardPeli";
import CardSeries from "../../componentes/CardSeries/CardSeries";

function SearchResult(props) {
    const [resultados, setResultados] = useState([])


    useEffect(() => {
        let valor = props.match.params.valor;
        let select = props.match.params.select;

        fetch(`https://api.themoviedb.org/3/search/${select}?api_key=0185f70c5f71076c61606afd4f75803b&query=${valor}`)
            .then(response => response.json())
            .then(data => { console.log(data.results); setResultados(data.results) })

            .catch(error => console.log(error));
    }, [])

        return (
            <div className="fondoMovie">
                <section className="divEnCartel">
                    {resultados.length === 0 ? (<p>No hay resultados</p>) : (resultados.map((pelicula, idx) =>

                    (props.match.params.select === 'tv' ?
                        <CardSeries key={idx + 1}
                            img={pelicula.poster_path}
                            title={pelicula.name}
                            id={pelicula.id}
                            overview={pelicula.overview}
                            type={props.match.params.select}
                        /> : <CardPeli key={idx + 1}
                            img={pelicula.poster_path}
                            title={pelicula.title}
                            id={pelicula.id}
                            overview={pelicula.overview}
                            type={props.match.params.select}
                        />)


                    ))}
                </section>
            </div>
        )
    };


export default SearchResult;