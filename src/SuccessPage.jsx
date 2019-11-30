import React from "react";
import { Button, Card, Icon } from "antd";
import { Link } from "react-router-dom";
import * as languageFile from "./LanguageMessages";

const language =
  languageFile.languageConfig === "hindi"
    ? languageFile.hindi
    : languageFile.english;

const { Meta } = Card;

export default class SuccessPage extends React.Component {
  render() {
    const { type } = this.props;
    const address = this.props.location.state[0];
    console.log(address);
    return (
      <div style={{ padding: "30px" }}>
        <Card
          style={{
            width: "95%",
            margin: "50px auto auto auto",
            backgroundColor: "#ECECEC"
          }}
        >
          <Meta
            avatar={
              <Icon
                type="check-circle"
                theme="twoTone"
                twoToneColor="#52c41a"
                style={{ marginRight: "10px", fontSize: "50px" }}
              />
            }
            title="Order received successfully"
            description={
              type === "sell"
                ? "We will collect the items from you soon"
                : "Items will be delivered soon"
            }
          />
        </Card>
        <Card
          title={language.Selectedaddress}
          style={{
            width: "75%",
            height: "210px",
            margin: "50px auto auto auto"
          }}
        >
          {address.Name}
          <br />
          {address.Door}
          <br />
          {address.Near}
          <br />
          {address.Village}
          <br />
          {address.PinCode}
          <br />
          {address.State}
          <br />
        </Card>
        <Link to={{ pathname: "/" }}>
          <Button
            type="secondary"
            size="large"
            style={{ margin: "30px 150px 50px 80px" }}
          >
            Go back to Home
          </Button>
        </Link>
      </div>
    );
  }
}
