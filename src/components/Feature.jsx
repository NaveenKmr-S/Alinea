import React from "react";
import PhoneImg from "./img/feature1.gif";
import Box from "./Box";
import Sidehead from "./Sidehead";

const feature = () => {

    const values = [
        [
            {emoji:"🍩",title:"Custom Portfolios",desc:"Pre-packaged portfolios for you."},
            {emoji:"👭",title:"Kickass Community",desc:"Our community is here to support you every step of the way."},
            {emoji:"🚀",title:"Speedy Support",desc:"We have quick answers to all your investing questions."}
        ],
        [
            {emoji:"🍕",title:"Fractional Shares",desc:"Invest in any share with as little as $1."},
            {emoji:"💰",title:"Invest with Intention",desc:"We give you the right information to make an impact."},
            {emoji:"📚",title:"Learn & Grow",desc:"We make learning fun and easy."}
        ]
    ];

    return (
        <div className="featureHead">
            <Sidehead 
                title = "What does Alinea offer?"
            />

            <div className="container">
                <div className="row row-grid align-items-center gap">
                    <div className="col-lg-4">
                        {values[0].map( (v, i) => <div key={i}><Box values={v} /></div> )}
                    </div>
                    <div className="col-sm-4">
                        <img src={PhoneImg} alt="app" />
                    </div>
                    <div className="col-sm-4 belowCollection">
                        {values[1].map( (v, i) => <Box key={i} values={v} /> )}
                    </div>
                </div>
            </div>

        </div>
    );

};

export default feature;