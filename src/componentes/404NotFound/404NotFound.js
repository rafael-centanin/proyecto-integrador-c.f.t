import react from 'react'
import './404NotFound.css'

function NotFound(){
    return(
        <div id="divNotFound" className="mainHome">
            <h1 className="tituloNotFound">404</h1>
            <h3 id='h3NotFound' className='h3register'>Not Found</h3>
            <p id="pNotFound" className='nombres'>Esta pagina no existe, intente con otra url</p>
        </div>
    )
}
export default NotFound