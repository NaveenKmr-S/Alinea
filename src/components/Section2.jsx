import React from "react";
import Card from "./Cards";

export default function section2(){

    return(
        <div className="container-fluid card-con">
            <div className="row">
                
                <Card 
                    heading = "Community"
                    content = "We all need someone to lean on and investing is no different.
                                As part of our community, you get the support to embark and continue on your journey."
                    icon = "👨‍👩‍👦"
                />
                <Card 
                    heading = "Responsible Investing"
                    content = "Make your money moves matter!
                                Express your values and interests through your investments."
                    icon = "💸"
                />
                <Card 
                    heading = "Learning"
                    content = "We eliminate all the unnecessary financial jargon.
                                Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor."
                    icon = "💡"
                />
            </div>
        </div>
    );
}