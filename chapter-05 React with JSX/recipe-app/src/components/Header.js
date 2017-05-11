import React from "react";
import "../../stylesheets/Menu.css";

const Header = (props) =>
    <div className="header">
        {props.children}
    </div>

export default Header