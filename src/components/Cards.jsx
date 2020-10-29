import React from "react";

export default function card(props){
    return (
        <div className="card col-sm mb-3">
            <p className="icons">{props.icon}</p>
            <div className="card-body">
                <h4 className="card-title"> {props.heading} </h4>
                <p className="card-text"> {props.content} </p>
            </div>
        </div>
    );

}