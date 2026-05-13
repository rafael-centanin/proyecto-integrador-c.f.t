import React, { useState, useEffect} from "react";
import './Detalle.css'
import Cookies from 'universal-cookie'

let cookies = new Cookies()
function Detalle(props){
    const [pelicula, setPelicula] = useState("")
    const[favoritos, setFavoritos]= useState(false)
    const [cargar, setCargar]= useState(true)
    let ids=Number(props.match.params.id)

    useEffect(()=> {       
        let id = Number(props.match.params.id);
        let type = props.match.params.type;
        let clave = "";

        if (type === "tv") {
            clave = localStorage.getItem("favoritosSeries")
        } else {
            clave = localStorage.getItem('favoritosPeliculas');
        }
        if (clave !== null) {
            let storage = JSON.parse(clave)
            let incluye = storage.includes(Number(props.match.params.id));
            setFavoritos(incluye)
        }
        fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=0185f70c5f71076c61606afd4f75803b`)
            .then(response => response.json())
            .then(data => {
                    setPelicula(data)
                    setCargar(false)
            })
            .catch(error => console.log(error))
    },[])

    function agregarFav(ids) {
        let storage = localStorage.getItem("favoritosPeliculas");
        let storageSeries = localStorage.getItem("favoritosSeries");
        let type =props.match.params.type;

        if (type === 'tv') {
            if (storageSeries !== null) {
                let favoritosrecuperados = JSON.parse(storageSeries);

                favoritosrecuperados.push(ids);

                let storageString = JSON.stringify(favoritosrecuperados);
                localStorage.setItem("favoritosSeries", storageString)
            } else {
                let variable = [ids];
                let storageString = JSON.stringify(variable);
                localStorage.setItem("favoritosSeries", storageString)
            }
             setFavoritos(true)
        } else {
            if (storage !== null) {
                let favoritosrecuperados = JSON.parse(storage);

                favoritosrecuperados.push(ids);

                let storageString = JSON.stringify(favoritosrecuperados);
                localStorage.setItem("favoritosPeliculas", storageString)
            } else {
                let variable = [ids];
                let storageString = JSON.stringify(variable);
                localStorage.setItem("favoritosPeliculas", storageString)
            }
                setFavoritos(true)
        }


    }
    function sacarFav(ids) {
        let type = props.match.params.type;
        let clave = "";

        if (type === "tv") {
            clave = localStorage.getItem("favoritosSeries")
        } else {
            clave = localStorage.getItem('favoritosPeliculas');
        }

        let storage = JSON.parse(clave)
        let storageFiltrado = storage.filter((elemento) => elemento !== ids)
        let storageString = JSON.stringify(storageFiltrado)

        if (type === 'tv') {
            localStorage.setItem("favoritosSeries", storageString)
        } else {
            localStorage.setItem("favoritosPeliculas", storageString)
        }
            setFavoritos(false)
    }

        console.log(pelicula)
        if (cargar === true) {
            return (
                <p>Cargando...</p>
            )
        }
        else {
            let usuario = cookies.get("user-auth-cookie")
            let titulo = pelicula.title || pelicula.name
            let fechas = pelicula.release_date || pelicula.first_air_date
            let duracion = props.match.params.type === 'movie' ? pelicula.runtime : null;
            return (
                <div id="divgeneralDetalle">
                    <article id="articleDetalle" className="peliculaEnCartel">
                        <div>
                            <img id="imagenDetalle" className="imagenpelicula" src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}.jpg`} alt={titulo} />
                        </div>
                        <div>
                            <h2 id="tituloDetalle" className="titulopelicula" > {titulo} </h2>
                            <div className="informacionDetalle">
                                <p className="datoDetalle"><strong>Rating:</strong> {pelicula.vote_average}/10</p>
                                <p className="datoDetalle"><strong>Fecha de estreno: </strong> {fechas}</p>
                                {duracion && <p className="datoDetalle"><strong>Duracion:</strong> {duracion} minutos</p>}
                            </div>
                            <p className="informacionDetalle">{pelicula.overview}</p>
                            <div className="mapeoDetalle">
                                {pelicula.genres.map((genero, idx) =>
                                    <p id="pMapeadaDetalle" className="datoDetalle" key={genero + idx}>{genero.name}</p>)}
                            </div>
                            {usuario != null ? (
                                favoritos === true ? <button onClick={() => sacarFav(ids)}>Sacar de favoritos</button> : <button onClick={() => agregarFav(ids)}>Agregar a favoritos</button>
                            ) : null}
                        </div>
                    </article>
                </div>
            )
        }
}
export default Detalle;