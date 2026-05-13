import React  from "react";
import "../MasPopulares/MasPopulares.css"
import CardPeli from "../CardPeli/CardPeli";


function MasPopulares(props) {

    return (

        <div className="divMasPopular ">

            {props.peliculas.map((pelicula, idx) => (
                <CardPeli key={idx + 1}
                    img={pelicula.poster_path}
                    title={pelicula.title}
                    id={pelicula.id}
                    overview={pelicula.overview}
                    type="movie" />
            ))}
        </div>
    )
}



export default MasPopulares;