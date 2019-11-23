import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="buy-sell">
        <div>
          <Button type="primary" size="large">
            Buy
          </Button>
        </div>
        <div>
          <Link to="/sell">
            <Button type="secondary" size="large">
              Sell
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
