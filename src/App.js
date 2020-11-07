import React from "react";
import NetworkComponent from "./component/network";
import ChartComponent from "./component/chart";
import Dropdown from "./component/CountryDropdown";
import "./App.css";

function App() {
    return (
        <div style={{textAlign: "center"}}>  <h1>Select a country</h1>
            <Dropdown />
            {/* <NetworkComponent /> */}
        </div>
    );
}

export default App;
