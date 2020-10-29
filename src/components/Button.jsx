import React from "react";

export default function button(prop){
    return(
        <div className="header-btn">
            <button type = "button" className="btn btn-light btn-lg">
                {prop.name}
            </button>
        </div>
    );

}