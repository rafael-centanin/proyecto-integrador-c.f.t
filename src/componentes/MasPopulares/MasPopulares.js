import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./MasPopulares.css"


class MasPopulares extends Component{
    constructor(props){
        super(props)
        this.state = {
            show : false,
            hide : true

        }
    }

    show() {
        this.setState({
            show : this.state.show=true
        })
    }

    hide() {
        this.setState({
            show: this.state.show=false,
        })
    }

    render(){
        return (

        <div className="divEnCartel">
            {this.props.peliculas.map((pelicula) =>(
            <article className="peliculaEnCartel">
            <img
                src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}.jpg`}
                    alt={pelicula.title}
                    />
            <h2 > <Link to= "">{pelicula.title} </Link></h2>

            {this.state.show === true ? <p>{pelicula.overview}</p>  : null }
            {this.state.show=== true ?  <button className='more' onClick={()=> this.hide()}>Ver Menos</button>: 
            <button className='more' onClick={()=> this.show()}> Ver Descripcion</button>}

            
		    <button className='delete'onClick={() => ""()}>Detalle</button>
            <button className='fav'onClick={() => this.props.favoritos()}>Favoritos</button> 
        </article>
        ))}
        </div>
        )
    }
}


export default MasPopulares;