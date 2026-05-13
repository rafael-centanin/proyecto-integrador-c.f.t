import "../Busqueda/Busqueda.css"
import { Component } from "react";
import { withRouter } from "react-router-dom"
import React, { useState, useEffect } from "react";
function Busqueda (props) {
  const[select, setSelect] = useState("movie")
  const[valor, setValor]= useState("")


  function evitarSubmit(event) {
    event.preventDefault();
    props.history.push(`/SearchResults/${select}/${valor}`)
  }

  function controlarCambios(event) {
    setValor(event.target.value)

  }
  function cambiarSelect(event) {
    setSelect(event.target.value)

  }


  // render() {
    return (
      <form className="barra_busqueda" onSubmit={(event) => evitarSubmit(event)}>
        <input placeholder="Encuentra tu nueva serie o pelicula favorita" type="text" onChange={(event) => controlarCambios(event)} value= {valor} className="busqueda" />
        <button type="submit">Buscar</button>
        <select onChange={(event) => cambiarSelect(event)} className="selectBusqueda"
        >
          <option value="movie" className="option">Películas </option>
          <option value="tv" className="option">Series </option>
        </select>
      </form>
    );
  }
  

export default withRouter(Busqueda);