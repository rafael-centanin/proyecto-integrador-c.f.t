
import "./PelisCartel.css"
import React, { Component } from "react";
import CardPeli from "../CardPeli/CardPeli";

class PelisCartel extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    render() {
        return (

            <div className="divEnCartel">

                {this.props.peliculas.map((pelicula, idx) => (
                    <CardPeli key={idx + 1}
                    img = {pelicula.poster_path} 
                    title = {pelicula.title}
                    id = {pelicula.id}
                    overview= {pelicula.overview}
                    type="movie" />
                ))}
            </div>
        )
    }
}
export default PelisCartel;