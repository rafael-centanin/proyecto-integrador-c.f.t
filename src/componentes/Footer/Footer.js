import React from "react";
import "../Footer/Footer.css"

function Footer() {
    return (
        <footer className="nombresFoot">
            <div className="nombres">
                <img id="logo" src="/images/logo.png" alt="Logo" />
                <p id="copy">Copyright ® Dashboard 2022</p>
                <p>Rafael Centanin</p>
                <p>Abril Farinaccia</p>
                <p>Benjamin Torres</p>
            </div>
        </footer>
    )
}

export default Footer;