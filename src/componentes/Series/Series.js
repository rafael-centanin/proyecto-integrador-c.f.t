import React, { useState, useEffect } from "react";
import CardSeries from "../CardSeries/CardSeries";
import './Series.css'
function Series() {
    const [dataSeries, setDataSeries] = useState([])
    const [valor, setValor] = useState("")
    const [page, setPage] = useState(1)



    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=0185f70c5f71076c61606afd4f75803b&page=1")
            .then(response => response.json())
            .then(data => setDataSeries(data.results))
            .catch(error => console.log(error));
    })


    function cargarMas() {
        let otraPag = page + 1
        fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=0185f70c5f71076c61606afd4f75803b&page=${otraPag}`)
            .then(response => response.json())
            .then(data => {
                console.log('revisando mas', data)
                setDataSeries(dataSeries.concat(data.results))
                setPage(otraPag)
                })
            .catch(error => console.log('El error fue: ' + error))
    }

    function evitarSubmit(event) {
        event.preventDefault();

    }

    function controlarCambios(event) {
        setValor(event.target.value)
    }
        console.log(this.state.dataSeries);
        let seriesAMostrar = dataSeries.filter((pj) => pj.name.toLowerCase().includes(this.state.valor.toLowerCase()))
        return (
            <div className="fondoMovie">

                {dataSeries.length === 0 ? <p>Cargando...</p> :


                    <div className="divEnCartel">
                        <div id="formMovie" className="formMovie">
                            <form id="formId" className="barra_busqueda" onSubmit={(event) => evitarSubmit(event)}>
                                <input placeholder="Encuentra tu serie favorita" type="text" onChange={(event) => controlarCambios(event)} value={valor} className="busqueda" />
                                <label className="labelMovie">Buscar</label>
                            </form>
                        </div>

                        {seriesAMostrar.map((pelicula, idx) => (
                            <CardSeries key={idx + 1}
                                img={pelicula.poster_path}
                                title={pelicula.name}
                                id={pelicula.id}
                                overview={pelicula.overview} />

                        ))}
                        <button onClick={() => cargarMas()}>Cargar mas</button>

                    </div>
                }
            </div>
        )
    }



export default Series;