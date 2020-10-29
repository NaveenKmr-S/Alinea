import React from "react";

export default function sidehead(props){
    return(
        <div className="container-fluid">
            <div className="s-head">
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}