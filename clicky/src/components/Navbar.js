import React from "react";

const Navbar = props => (
    <div className="Navbar">
        <div className="title">{props.children}</div>
        <div className="scores">
            Current Score: {props.score} 
            <br />   
            HighScore: {props.topScore}
        </div>
    </div>
);


export default Navbar;