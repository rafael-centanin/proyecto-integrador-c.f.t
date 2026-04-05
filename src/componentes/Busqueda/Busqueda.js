import "../Busqueda/Busqueda.css"
import { Component } from "react";
import { withRouter } from "react-router-dom"
class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: '',
      select: "movie"
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/SearchResults/${this.state.select}/${this.state.valor}`)
  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
  }
  cambiarSelect(event) {
    this.setState({ select: event.target.value });
  }


  render() {
    return (
      <form className="barra_busqueda" onSubmit={(event) => this.evitarSubmit(event)}>
        <input placeholder="Encuentra tu nueva serie o pelicula favorita" type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} className="busqueda" />
        <button type="submit">Buscar</button>
        <select onChange={(event) => this.cambiarSelect(event)}
        >
          <option value="movie">Películas </option>
          <option value="tv">Series </option>
        </select>
      </form>
    );
  }
}

export default withRouter(Busqueda);