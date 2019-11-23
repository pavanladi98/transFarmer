import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon } from "antd";
import HomePage from "../src/HomePage.jsx";
import SellPage from "./SellPage.jsx";
import BillingPage from "./BillingPage.jsx";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "black", height: "50px" }}>
        <Link to="/">
          <h1 style={{ color: "white", display: "inline-block" }}> &nbsp; transFarmer</h1>
        </Link>
        <Link>
          <Icon type="shopping-cart" style={{float: "right", fontSize: "32px", marginTop: "10px", marginRight: "20px"}}/>
        </Link>
      </div>
      <Route path="/" exact component={HomePage} />
      <Route path="/sell" component={SellPage} />
      <Route path="/billing" component={BillingPage} />
    </Router>
  );
}

export default App;