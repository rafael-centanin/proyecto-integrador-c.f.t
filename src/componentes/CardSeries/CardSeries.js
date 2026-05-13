import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie'
import "../CardSeries/CardSeries.css";

let cookies = new Cookies()
function CardSeries(props) {

    const [show, setShow] = useState(false)
    const [favoritos, setFavoritos] = useState(false)

    useEffect(() => {
        let clave = localStorage.getItem("favoritosSeries");

        if (clave !== null) {
            let storage = JSON.parse(clave)
            let incluye = storage.includes(props.id);
            setFavoritos(incluye)
        }
    })

    function shows() {
        setShow(true)
    }

    function hides() {
        setShow(false)
    }
    function agregarFav(id) {
        let storage = localStorage.getItem("favoritosSeries");
        if (storage !== null) {
            let favoritosrecuperados = JSON.parse(storage);

            favoritosrecuperados.push(id);

            let storageString = JSON.stringify(favoritosrecuperados);
            localStorage.setItem("favoritosSeries", storageString)
        } else {
            let variable = [id];
            let storageString = JSON.stringify(variable);
            localStorage.setItem("favoritosSeries", storageString)
        }
        setFavoritos(true)

    }
    function sacarFav(id) {
        let clave = localStorage.getItem("favoritosSeries")
        let storage = JSON.parse(clave)
        let storageFiltrado = storage.filter((elemento) => elemento !== id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritosSeries", storageString)
        setFavoritos(false)

    }

    let usuario = cookies.get("user-auth-cookie")
    return (
        <article className="peliculaEnCartel">
            <img className="imagenpelicula"
                src={`https://image.tmdb.org/t/p/w342/${props.img}.jpg`}
                alt={props.title}
            />
            <h2 className="titulopelicula" >{props.title}</h2>
            {show === true ? <p className="Descripcion">{props.overview}</p> : null}
            {show === true ? <button className='more' onClick={() => hides()}>Ver Menos</button> :
                <button className='more' onClick={() => shows()}> Ver Descripcion</button>}
            <Link to={`/Detalle/tv/${props.id}`} className='botonDetalle'>
                Detalle
            </Link>
            {usuario != null ? (
                favoritos === true ? <button onClick={() => sacarFav(props.id)}>Sacar de favoritos</button> : <button onClick={() => agregarFav(props.id)}>Agregar a favoritos</button>
            ) : null}
        </article>
    )
}


export default CardSeries;