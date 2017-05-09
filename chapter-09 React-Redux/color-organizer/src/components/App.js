import React from "react";
import {Colors, Menu, NewColor} from "./containers";
import "../../stylesheets/APP.css";

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App