//Imports
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import "./styles/App.css";
import Map from "./components/Map";

//map function for centering on Burlington 
function App() {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  return (
    <div>
      <Map center={center} />
      <BrowserRouter>
        <Switch>
          <Route
            exact path = "/" component = {Home}
            />
          <Route
            path="/about" component = {About}
           
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
