
import React, { Component } from "react";


class Detalle extends Component {
    constructor(props) {
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

            <div className="divEnCartel">
                    <article className="peliculaEnCartel">
                       
                        {this.state.show === true ? <button className='more' onClick={() => this.hide()}>Ver Menos</button> :
                            <button className='more' onClick={() => this.show()}> Ver Descripcion</button>}

                        <button className='fav' onClick={() => this.props.favoritos()}>Favoritos</button>
                    </article>
            </div>
        )
    }
}


export default Detalle;