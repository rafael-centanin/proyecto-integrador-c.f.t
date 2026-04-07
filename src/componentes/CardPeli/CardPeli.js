import React, {Component} from "react" 
import { Link } from "react-router-dom"
import MasPopulares from "../MasPopulares/MasPopulares"
class CardPeli extends Component{
    constructor(props){
        super(props)
            this.state = {
            show: false,
            hide: true

        }
    }

    show() {
        this.setState({
            show: true,
        })
    }

    hide() {
        this.setState({
            show: false,
        })
    }

    render() {
        return (

                
                    <article  className="peliculaEnCartel">
                        <img className="imagenpelicula"
                            src={`https://image.tmdb.org/t/p/w342/${this.props.img}.jpg`}
                            alt={this.props.title}
                        />
                        <Link to=""><h2 className="titulopelicula" >{this.props.title} </h2></Link>
                        {this.state.show === true ? <p>{this.props.overview}</p> : null}
                        {this.state.show === true ? <button className='more' onClick={() => this.hide()}>Ver Menos</button> :
                            <button className='more' onClick={() => this.show()}> Ver Descripcion</button>}
                        <Link to={`/Detalle/movie/${this.props.id}`} className='botonDetalle'>
                            Detalle
                        </Link>
                        <button className='fav' onClick={() => this.props.favoritos()}>Favoritos</button>
                    </article>
        )
    }
}

export default CardPeli;