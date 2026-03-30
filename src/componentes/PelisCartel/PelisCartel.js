import React from "react";
import "./PelisCartel.css"
function PelisCartel(props) {
    return (
        <div className="divEnCartel">
                {props.peliculas.map((pelicula) =>(
                    <article className="peliculaEnCartel">
                        <img
                            src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}.jpg`}
                            alt={pelicula.title}
                        />
                        <p>{pelicula.title}</p>
                        <p>{pelicula.overview}</p>
                        <button> Ver Descripcion</button>
                        <button> Ir a detalle</button>
                        <button> Agregar/ quitar de favoritos</button>

                    </article>
                ))}

        </div>
    )
}


export default PelisCartel;