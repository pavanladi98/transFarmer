import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="buy-sell">
        <div>
          <Link to="/sell">
            <Button type="primary" className="buy-sell-button">
              <b>Sell</b>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/buy">
            <Button type="secondary" className="buy-sell-button">
              <b>Buy</b>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
