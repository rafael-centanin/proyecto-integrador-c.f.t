import { Component, useState, useEffect } from "react";
import Busqueda from "../../componentes/Busqueda/Busqueda";

import PelisCartel from "../../componentes/PelisCartel/PelisCartel";


function VerTodasCartel () {
    const[masPopulares, setMasPolulares] = useState([])
    const[enCartel, setEnCartel] = useState([])
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         masPopulares: [],
    //         enCartel: []

    //     }
    
    useEffect(()=> {
        pelisEnCartel();
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => setMasPolulares (data.results))
            .catch(error => console.log(error));
    },[])

    function pelisEnCartel() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => setEnCartel (data.results))
            .catch(error => console.log(error));
    }


        return (
            <main className="mainHome">
                <Busqueda />
                
                <h2 id="h2Main"className="nav-link" >Películas en Cartel</h2>
                {this.state.enCartel.length === 0 ? <p>Cargando...</p> : <PelisCartel peliculas={setEnCartel} />}
                
            </main>
        );
    }

export default VerTodasCartel;