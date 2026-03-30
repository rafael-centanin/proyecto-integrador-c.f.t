import React from "react";
import "../Busqueda/Busqueda.css"
function Busqueda(){
    return(
       <form className="barra_busqueda" action={"./"} method="GET">
            <input type="text" placeholder="Buscar películas o series..." className="busqueda"></input>
            <button type="submit">Buscar</button>
       </form>
    );
}
export default Busqueda;