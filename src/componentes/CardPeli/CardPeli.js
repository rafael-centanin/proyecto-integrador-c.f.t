import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CardPeli/CardPeli.css";
import Cookies from 'universal-cookie'

let cookies = new Cookies()
function CardPeli (props) {
        const [show, setShow] = useState(false)
        const [favoritos, setFavoritos] = useState(false)
            
        
    
    useEffect(()=> {
        let clave = localStorage.getItem("favoritosPeliculas");

        if (clave !== null) {
            let storage = JSON.parse(clave)
            let incluye = storage.includes(props.id);
            setFavoritos(incluye)
        }
    },[])

    function shows() {
        setShow(true)
    }

    function hides() {
        setShow(false)
    }
    function agregarFav(id) {
        let storage = localStorage.getItem("favoritosPeliculas");
        if (storage !== null) {
            let favoritosrecuperados = JSON.parse(storage);

            favoritosrecuperados.push(id);

            let storageString = JSON.stringify(favoritosrecuperados);
            localStorage.setItem("favoritosPeliculas", storageString)
        } else {
            let variable = [id];
            let storageString = JSON.stringify(variable);
            localStorage.setItem("favoritosPeliculas", storageString)
        }
        setFavoritos(true)

    }
    function sacarFav(id) {
        let clave = localStorage.getItem("favoritosPeliculas")
        let storage = JSON.parse(clave)
        let storageFiltrado = storage.filter((elemento) => elemento !== id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritosPeliculas", storageString)
        setFavoritos(false)

    }

        let usuario = cookies.get("user-auth-cookie")
        return (


            <article className="peliculaMasPopular">
                <img className="imagenpeliculaMasPop"
                    src={`https://image.tmdb.org/t/p/w342/${props.img}.jpg`}
                    alt={props.title}
                />
                <h2 className="titulopelicula2" >{props.title} </h2>
                {show === true ? <p className="Descripcion">{props.overview}</p> : null}
                {show === true ? <button className='more' onClick={() => hides()}>Ver Menos</button> :
                    <button className='more' onClick={() =>shows()}> Ver Descripcion</button>}
                <Link to={`/Detalle/${props.type}/${props.id}`} className='botonDetalle'>
                    Detalle
                </Link>
                {usuario != null ? (
                    favoritos === true ? <button onClick={() => sacarFav(props.id)}>Sacar de favoritos</button>: <button onClick={() =>agregarFav(props.id)}>Agregar a favoritos</button>
                ) : null}
            </article>
        )
    }

export default CardPeli;