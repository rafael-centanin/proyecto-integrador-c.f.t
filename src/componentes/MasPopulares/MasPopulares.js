import React from "react";
import "./MasPopulares.css"
function MasPopulares(props) {
    return (
        <div className="divMasPopular">
                {props.peliculas.map((pelicula) =>(
                    <article className="peliculaMasPopular">
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


export default MasPopulares;