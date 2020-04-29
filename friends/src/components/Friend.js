import React from "react";

const Friend = (props) => {
    return (
        <div>
            <h3>{props.f.name}</h3>
            <h2>  {props.f.age} </h2>
            <h2>  {props.f.email} </h2>
        </div>
    )
};

export default Friend;