import React, { Component } from "react";
import CardSeries from "../CardSeries/CardSeries";
class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSeries: []
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=0185f70c5f71076c61606afd4f75803b")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dataSeries: data.results
                })

            })
            .catch(error => console.log(error));
    }


    render() {
        console.log(this.state.dataSeries);
        return (
            <div>

                 {this.state.dataSeries.length===0 ? <p>Cargando...</p>: 
                    
                    
                    <div className="divEnCartel">
                    
                        {this.state.dataSeries.map((pelicula, idx) => (
                            <CardSeries key={idx + 1}
                            img={pelicula.poster_path}
                            title={pelicula.name}
                            id={pelicula.id}
                            overview={pelicula.overview} />
                        ))}

                    </div>
                  }   
                  </div>
        )}}


export default Series;