import React, { Component } from "react";
import "../MasPopulares/MasPopulares.css"
import CardPeli from "../CardPeli/CardPeli";


class MasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
   
    render() {
        return (

            <div className="divMasPopular ">

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
    }}



export default MasPopulares;