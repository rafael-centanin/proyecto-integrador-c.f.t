import "../Busqueda/Busqueda.css"
import { Component } from "react";
import {withRouter} from "react-router-dom"
class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {valor: ''};
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/SearchResults/${this.state.valor}`)
  }

  controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

  render() {
    return (
     <form className="barra_busqueda" onSubmit={(event)=>this.evitarSubmit(event)}>
       <label>Buscar</label>
       <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} className="busqueda"/>
       <button type="submit">Buscar</button>
     </form>
    );
  }
}

export default withRouter(Busqueda);