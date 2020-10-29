import React from "react";
import Button from "./Button";

export default function section4(){
    return(
        <div className="container-fluid section4">
        <div className="row">
            <div className="s4-head col-12">
                <h1>BECOME A PART OF OUR KICKASS COMMUNITY</h1>
            </div>
            <div className="s4-con col-12">
                <h4>We can’t do this alone, so we need each other, especially you.
                    Join our community and get started on your investing journey!
                </h4>
            </div>
            <div className="s4-btn col-12">
                <Button name="Join now" />
            </div>
            
            </div>   
        </div>
    );
}