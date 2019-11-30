import React from "react";
import { Card, List, Button, Radio } from "antd";
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
        Name: "Person1",
        Door: "do-or-1",
        Near: "near add 1",
        PinCode: "123456",
        Village: "village1",
        State: "state1"
      },
      {
        Name: "Person2",
        Door: "do-or-2",
        Near: "near add 2",
        PinCode: "123456",
        Village: "village1",
        State: "state1"
      },
      {
        Name: "Person3",
        Door: "do-or-3",
        Near: "near add 3",
        PinCode: "123456",
        Village: "village1",
        State: "state1"
      }
    ];
    return (
      <div>
        {/* <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={addresses}
          renderItem={item => (
            <List.Item style={{ margin: "50px 50px 50px 50px" }}>
              <Card title={item.Name} style={{}}>
                {item.Door}
                <br />
                {item.Near}
                <br />
                {item.Village}
                <br />
                {item.PinCode}
                <br />
                {item.State}
                <br />
              </Card>
            </List.Item>
          )}
        /> */}

        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio style={{height: "100px", width: "300px"}} value={1}>
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
          <Radio style={{height: "100px", width: "300px"}} value={2}>
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
          <Radio style={{height: "100px", width: "300px"}} value={3}>
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
            state: [addresses[this.state.value-1]]
          }}
        >
           
          <Button
            type="primary"
            size="large"
            style={{ margin: "20px 50px 50px 250px" }}
          >
            Confirm
          </Button>
        </Link>
      </div>
    );
  }
}
