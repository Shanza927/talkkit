import React from "react";
const Frame = (props) =>{
    return(
        <>
            <div className="frame">
                 <img src={props.profile} />
                 <span className="subheading name">
                    {props.name}
                </span>
            </div>
        </>
    );
};
export default Frame;