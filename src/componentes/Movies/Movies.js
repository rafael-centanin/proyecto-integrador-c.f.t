import React, { useState, useEffect } from "react";
import CardPeli from "../CardPeli/CardPeli";
import './Movies.css'
function Movies() {
    const [dataPeliculas, setDataPeliculas] = useState([])
    const[valor, setValor]= useState("")
    const [page, setPage]= useState(1)

    
    useEffect(()=> {
                fetch("https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b&page=1")
            .then(response => response.json())
            .then(data => setDataPeliculas(data.results))
            .catch(error => console.log(error));

    },[])

    function cargarMas() {
        let otraPag = page + 1
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b&page=${otraPag}`)
            .then(response => response.json())
            .then(data => {
                console.log('revisando mas', data)
                setDataPeliculas(dataPeliculas.concat(data.results))
                setPage(otraPag)
            }
            )
            .catch(error => console.log('El error fue: ' + error))
    }
    function evitarSubmit(event) {
        event.preventDefault();

    }

    function controlarCambios(event){
        setValor(event.target.value)

    }

        console.log(dataPeliculas);
        let peliculasMostrar = dataPeliculas.filter((pj) => pj.title.toLowerCase().includes(valor.toLowerCase()))

        return (
            <div className="fondoMovie">

                {dataPeliculas.length === 0 ? <p>Cargando...</p> :
                    <div className="divEnCartel">
                        <div id="formMovie" className="formMovie">
                            <form id="formId" className="barra_busqueda" onSubmit={(event) => evitarSubmit(event)}>
                                <input placeholder="Encuentra tu pelicula favorita" type="text" onChange={(event) => controlarCambios(event)} value={valor} className="busqueda" id="busquedaid" />
                                <label className="labelMovie">Buscar</label>
                            </form>
                        </div>
                        {peliculasMostrar.map((pelicula, idx) => (
                            <CardPeli key={idx + 1}
                                img={pelicula.poster_path}
                                title={pelicula.title}
                                id={pelicula.id}
                                overview={pelicula.overview}
                                type="movie" />
                        ))}
                        <button onClick={() => cargarMas()}>Cargar mas</button>
                    </div>
                }
            </div>
        )

    }
export default Movies;
