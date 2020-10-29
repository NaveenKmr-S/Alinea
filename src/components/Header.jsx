/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../App.css';
import Button from "./Button";
import Logo from "./img/logo.png";
import Phone from "./img/app-mobile.gif";
import $ from "jquery";

export default function header(){

    let i = 0;
    const txt1 = 'Invest with Intention. ';
    const txt2 = 'Learn with Intention. ';
    let temptxt = txt1;
    let isInc = true;

    const type1 = () => {
        if (i <= temptxt.length && isInc){
            $("#rocketstring").text(temptxt.slice(0, i)+"🚀");
            i++;
            if (i === txt1.length){
                isInc = false;
            }
        }
        if (!isInc){
            $("#rocketstring").text(temptxt.slice(0, i)+"🚀");
            i--; 
            if (i===0){
                isInc = true;
                temptxt = temptxt === txt1?txt2: txt1;
            }
        }
        setTimeout(type1, 150);
    };

    (function (){
        
        type1();

    })();

    return(
        <div className="main container-fluid">
            <div className="header">
                <nav className = "navbar" id="navbarr">
                        <img src = {Logo} alt = "logo"  className="logo navbar-brand" />
                        <div className="appstore">
                            <button type = "button" className="btn btn-dark btn-lg">
                                <i className="fab fa-apple"></i>App store
                            </button>

                            <button type = "button" className="btn btn-outline-light btn-lg">
                                <i className="fab fa-google-play"></i>Play store
                            </button>
                        </div>
                </nav>
            </div>

            <div className="header-text">
                <h1>
                    Not Your Typical <br/>
                    Investing App
                </h1>
            </div>

            <h2 className="rocketString" id="rocketstring"><span className="rocketAnim">🚀</span></h2>   


            <div className="head-txt">
                <h4>Alinea makes responsible investing fun, easy, and social.</h4>
            </div>

            <Button name = "Journey Begin" />

            <div className = "phone">
                <img src = {Phone} alt = "logo"/>
            </div>

        </div>
    );
}