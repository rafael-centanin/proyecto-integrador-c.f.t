import React from "react";
import {Link} from 'react-router-dom'
import "../Footer/Footer.css"

function Footer() {
    return (
        <footer className="nombresFoot">
            <div className="nombres">
                <Link id="logo" to="/"> <img id="logo" src="/images/logo.png" alt="Logo" /></Link>
                <p id="colorr" className="copy">Copyright ® Dashboard 2022</p>
                <p className="copy">Rafael Centanin</p>
                <p className="copy">Abril Farinaccia</p>
                <p id="Benjamin"className="copy">Benjamin Torres</p>
            </div>
        </footer>
    )
}

export default Footer;