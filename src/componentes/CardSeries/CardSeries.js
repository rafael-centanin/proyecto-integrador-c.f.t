import React, {Component} from "react" 
import { Link } from "react-router-dom"

class CardSeries extends Component{
    constructor(props){
        super(props)
            this.state = {
            show: false,
            hide: true

        }
    }
        componentDidMount() {
        let clave = localStorage.getItem("favoritosSeries");

        if (clave !== null) {
            let storage = JSON.parse(clave)
            let incluye = storage.includes(this.props.id);
            this.setState({
                favoritos: incluye
            })
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
    agregarFav(id) {
        let storage = localStorage.getItem("favoritosSeries");
        if (storage !== null) {
            let favoritosrecuperados = JSON.parse(storage);

            favoritosrecuperados.push(id);

            let storageString = JSON.stringify(favoritosrecuperados);
            localStorage.setItem("favoritosSeries", storageString)
        } else {
            let variable = [id];
            let storageString = JSON.stringify(variable);
            localStorage.setItem("favoritosSeries", storageString)
        }
        this.setState({
            favoritos: true,
        })

    }
    sacarFav(id) {
        let clave = localStorage.getItem("favoritosSeries")
        let storage = JSON.parse(clave)
        let storageFiltrado = storage.filter((elemento) => elemento != id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritosSeries", storageString)
        this.setState({
            favoritos: false,
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
                        <Link to={`/Detalle/tv/${this.props.id}`} className='botonDetalle'>
                            Detalle
                        </Link>
                        {this.state.favoritos === true ? <button onClick={() => this.sacarFav(this.props.id)}>Sacar de favoritos</button> : <button onClick={() => this.agregarFav(this.props.id)}>Agregar a favoritos</button>}
                    </article>
        )
    }
}

export default CardSeries;