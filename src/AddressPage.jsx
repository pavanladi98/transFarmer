import React from "react";
import { Card, Button, Radio } from "antd";
import { Link } from "react-router-dom";

export default class AddressPage extends React.Component {
  state = {
    value: 1
  };
  onChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { type } = this.props;
    const addresses = [
      {
        Name: "Hacker Kumar",
        Door: "8-6-107",
        Near: "near SBI",
        PinCode: "123456",
        Village: "Vizag",
        State: "State Pradesh"
      },
      {
        Name: "Hacker Kumar",
        Door: "1-2-304",
        Near: "near add2",
        PinCode: "123456",
        Village: "Vizag",
        State: "State Pradesh"
      },
      {
        Name: "Abcd hacker",
        Door: "19-2-304",
        Near: "near add3",
        PinCode: "123456",
        Village: "Vizag",
        State: "State Pradesh"
      }
    ];
    return (
      <div>
        <Radio.Group
          style={{ marginTop: "20px" }}
          onChange={this.onChange}
          value={this.state.value}
        >
          <Radio
            style={{
              height: "50px",
              width: "250px",
              margin: "50px 20px 20px 20px"
            }}
            value={1}
          >
            <Card title={addresses[0].Name} style={{}}>
              {addresses[0].Door}
              <br />
              {addresses[0].Near}
              <br />
              {addresses[0].Village}
              <br />
              {addresses[0].PinCode}
              <br />
              {addresses[0].State}
              <br />
            </Card>
          </Radio>
          <Radio
            style={{
              height: "50px",
              width: "250px",
              margin: "0px 20px 20px 20px"
            }}
            value={2}
          >
            <Card title={addresses[1].Name} style={{}}>
              {addresses[1].Door}
              <br />
              {addresses[1].Near}
              <br />
              {addresses[1].Village}
              <br />
              {addresses[1].PinCode}
              <br />
              {addresses[1].State}
              <br />
            </Card>
          </Radio>
          <Radio
            style={{
              height: "50px",
              width: "250px",
              margin: "0px 20px 0px 20px"
            }}
            value={3}
          >
            <Card title={addresses[2].Name} style={{}}>
              {addresses[2].Door}
              <br />
              {addresses[2].Near}
              <br />
              {addresses[2].Village}
              <br />
              {addresses[2].PinCode}
              <br />
              {addresses[2].State}
              <br />
            </Card>
          </Radio>
        </Radio.Group>
        <Link
          to={{
            pathname: "success",
            state: [addresses[this.state.value - 1]]
          }}
        >
          <Button
            type="primary"
            size="large"
            style={{ margin: "30px 150px 50px 80px" }}
          >
            Confirm
          </Button>
        </Link>
      </div>
    );
  }
}
