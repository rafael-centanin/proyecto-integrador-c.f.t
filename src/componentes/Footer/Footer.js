import React from "react";
import "../Footer/Footer.css"

function Footer() {
    return(
    <footer className="nombresFoot">
        <img id="logo" src="./images/logo.png" alt="Logo" />
        <p className="copy">Copyright ® Dashboard 2022</p>
        <div className="nombres">
        <p>RAFAEL CENTANIN</p>
        <p>ABRIL FARI</p>
        <p>BENJAMIN TORRES</p>
        </div>
    </footer>
    )
}

export default Footer;