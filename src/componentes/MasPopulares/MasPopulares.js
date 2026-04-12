import React, { Component } from "react";
import "../MasPopulares/MasPopulares.css"
import CardPeli from "../CardPeli/CardPeli";


class MasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            hide: true,
            masPopulares: [],
            enCartel: []

        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    masPopulares: data.results
                })
            })
            .catch(error => console.log(error));
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