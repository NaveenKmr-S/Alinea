import React from "react";
import Logo from "./img/logo.png";

export default function Footer(){
    return(
        <div className = "footer">
            <div className="logo-con">
                <img src={Logo} alt="logo" className="logo"/>
            </div>
            <div>
                <p className="footer-text">Alinea Invest makes responsible investing fun, easy, and social with learning features.</p>
            </div>
            <ul className = "footer-list">
                <li><i className ="fab fa-instagram"></i></li>
                <li><i className ="fab fa-facebook-f"></i></li>
                <li><i className ="fab fa-twitter"></i></li>
                <li><i className ="fab fa-linkedin-in"></i></li>
            </ul>
            <div>
                <p className="footer-text copy">Copyright @ 2020 Alinea </p>
            </div>
        </div>

    );
}