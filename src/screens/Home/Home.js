import React, { useState, useEffect } from "react";
import Busqueda from "../../componentes/Busqueda/Busqueda";
import MasPopulares from "../../componentes/MasPopulares/MasPopulares";
import PelisCartel from "../../componentes/PelisCartel/PelisCartel";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
    const [masPopulares, setMasPopulares] = useState([])
    const [enCartel, setenCartel] = useState([])


    useEffect(() => {
        pelisEnCartel();
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data =>  setMasPopulares(data.results))
            .catch(error => console.log(error));
    })

    function pelisEnCartel() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => {
                setenCartel(data.results)
            })
            .catch(error => console.log(error));
    }

        return(
            <main className = "mainHome" >
                <Busqueda />
                <div className="divisionhome">
                    <h2 id="h2Main" className="nav-link">Más Populares</h2>
                    <button id="vermasHome"> <Link id="BotonVerTodas" to="/VerTodasPopulares">Ver Todas</Link> </button>
                </div>
                { masPopulares.length === 0 ? <p>Cargando...</p> : <MasPopulares peliculas={masPopulares.slice(0, 8)} type="movie" />
    }
    < div className = "divisionhome" >
                    <h2 id="h2Main" className="nav-link" >Películas en Cartel</h2>
                    <button id="vermasHome" className="BotonVer"> <Link id="BotonVerTodas" to="/VerTodasCartel">Ver Todas</Link> </button>
                </div >
        { enCartel.length === 0 ? <p>Cargando...</p> : <PelisCartel peliculas={enCartel.slice(0, 8)} type="movie" /> }

            </main >
        );
}


export default Home;